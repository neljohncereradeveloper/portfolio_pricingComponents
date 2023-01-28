import classNames from "classnames";

type Props = {
  size: string;
};

export const CheckIcon = ({ size }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={classNames(size)}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
};
export const MinusIcon = ({ size }: Props) => {
  return (
    <svg
          xmlns="http://www.w3.org/2000/svg"
          className={classNames(size)}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
  );
};
