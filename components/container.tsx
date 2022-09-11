type Props = {
  children?: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return <div className="relative mx-auto">{children}</div>;
};

export default Container;
