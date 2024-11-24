export function GrayBox({
	children,
	className,
	onClick,
}: {
	children: JSX.Element;
	className?: string;
	onClick?: () => void;
}) {
	return (
		<div
			onClick={onClick}
			className={`bg-[#FCFCFC] rounded-[12px] border border-gray-200 flex flex-col gap-[40px] px-[40px] py-[48px] ${className}`}>
			{children}
		</div>
	);
}
