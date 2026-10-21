function Link({
  className,
  href,
  target,
  content
}) {
  return (
    <a className={className} href={href} target={target}>{content}</a>
  );
}

export default Link;
