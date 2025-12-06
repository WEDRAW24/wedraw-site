// Simple in-memory rate limiting
// Tracks submissions by IP address

interface RateLimitEntry {
  count: number;
  resetTime: number;
}

const rateLimitStore = new Map<string, RateLimitEntry>();

// Clean up old entries every hour
setInterval(() => {
  const now = Date.now();
  for (const [ip, entry] of rateLimitStore.entries()) {
    if (now > entry.resetTime) {
      rateLimitStore.delete(ip);
    }
  }
}, 60 * 60 * 1000);

export function checkRateLimit(
  ip: string,
  maxAttempts: number = 3,
  windowMs: number = 7 * 24 * 60 * 60 * 1000 // 1 week default
): { allowed: boolean; remaining: number; resetTime: number } {
  const now = Date.now();
  const entry = rateLimitStore.get(ip);

  // No entry or expired - allow and create new entry
  if (!entry || now > entry.resetTime) {
    const resetTime = now + windowMs;
    rateLimitStore.set(ip, { count: 1, resetTime });
    return { allowed: true, remaining: maxAttempts - 1, resetTime };
  }

  // Check if limit exceeded
  if (entry.count >= maxAttempts) {
    return { allowed: false, remaining: 0, resetTime: entry.resetTime };
  }

  // Increment count
  entry.count++;
  rateLimitStore.set(ip, entry);

  return {
    allowed: true,
    remaining: maxAttempts - entry.count,
    resetTime: entry.resetTime,
  };
}

