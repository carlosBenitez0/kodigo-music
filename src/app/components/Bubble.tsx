interface props {
  left: string;
  top: string;
  blur: string;
  firstColor: string;
  secondColor: string;
  w: string;
  h: string;
  bgDireccion: string;
}

export const Bubble = ({
  left,
  top,
  blur,
  firstColor,
  secondColor,
  w,
  h,
  bgDireccion,
}: props) => {
  return (
    <div
      className={`left-[${left}] top-[${top}] bg-gradient-to-${bgDireccion} blur-[${blur}] from-${firstColor}-500 to-${secondColor}-500 w-[${w}] h-[${h}] rounded-full absolute`}
    ></div>
  );
};
