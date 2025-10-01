import { useEffect, useRef } from "react";

export function useClickOutside(onClickOutside) {
	const ref = useRef();

	useEffect(() => {
		function handleClick(event) {
			if (ref.current && !ref.current.contains(event.target)) {
				onClickOutside(event);
			}
		}

		document.addEventListener("mousedown", handleClick);
		return () => {
			document.removeEventListener("mousedown", handleClick);
		};
	}, [onClickOutside]);

	return ref;
}
