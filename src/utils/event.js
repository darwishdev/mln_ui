export function stopAndPrevent(e) {
  e.cancelable !== false && e.preventDefault();
  e.stopPropagation();
}
