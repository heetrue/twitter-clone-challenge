interface Props {
  name: string;
  type?: 'submit' | 'reset' | 'button';
}

const Button = ({ name, type = 'button' }: Props) => (
  <button type={type}>{name}</button>
);

export default Button;
