// TODO: replace eventually (won't work with SSR etc, but good enough for now)
export default function loopKey() {
  return Date.now() * Math.random();
}
