import { IndexController } from "../../Atom";

interface PageControllerProps {
  indexActive: number;
}

export default function PageController(props: PageControllerProps) {
  const { indexActive } = props;
  return (
    <div className="mt-12 flex justify-center">
      <div className="w-44 flex justify-start items-center">
        <div className="w-14">
          <IndexController
            index={1}
            isActive={indexActive === 1}
            isDone={indexActive > 1}
          />
        </div>
        <div className="h-0.5 w-20 bg-grey" />
        <div className={`w-14 ${indexActive === 1 && "-ml-1"}`}>
          <IndexController
            index={2}
            isActive={indexActive === 2}
            isDone={indexActive > 2}
          />
        </div>
      </div>
    </div>
  );
}
