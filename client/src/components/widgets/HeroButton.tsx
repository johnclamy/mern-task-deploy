import { ReactNode } from "react";
import Button from "react-bootstrap/Button";

type HeroButtonProp = {
  children: ReactNode;
  onShow: () => void;
};

const HeroButton = ({ children, onShow }: HeroButtonProp) => (
  <div className="d-sm-grid">
    <Button
      className="my-2 fw-bold text-uppercase"
      onClick={onShow}
      variant="warning"
      size="lg"
      type="button"
    >
      {children}
    </Button>
  </div>
);

export default HeroButton;
