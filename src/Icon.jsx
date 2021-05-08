const Icon = (props) => {
  const { iconName } = props;

  return (
    <svg>
      <use href={`/sprites/feather-sprite.svg#${iconName}`} />
    </svg>
  );
};

export default Icon;