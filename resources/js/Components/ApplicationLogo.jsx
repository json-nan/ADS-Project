export default function ApplicationLogo({
    width = 175,
    height = 175,
    ...props
}) {
    return (
        <img
            width={width}
            height={height}
            {...props}
            src="/images/app-logo.png"
        />
    );
}
