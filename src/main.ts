import { CWCO, ContextProviderComponent } from "cwco";

class SFIcon extends ContextProviderComponent {
  static observedAttributes: string[] = ["name", "size", "color"];

  name = "";
  size = "16px";
  color = "#000";

  get stylesheet(): CWCO.Stylesheet {
    return `<link rel="stylesheet" href="./src/sf-icon.css" />`;
  }

  //! By using of ContextProvider, textContent is always empty
  // get iconName() {
  //   return this.name || (this.textContent || "").trim();
  // }

  get template() {
    return `<i class="sfi-${this.name}" attr.style.font-size="${this.fontSize}, size" attr.style.color="${this.accent}, color"></i>`;
  }

  get fontSize() {
    switch (this.size) {
      case "xsm":
        return "8px";

      case "sm":
        return "12px";

      case "md":
        return "15px";

      case "lg":
        return "19px";

      case "xlg":
        return "24px";

      default:
        return this.size;
    }
  }

  get accent() {
    switch (this.color) {
      case "primary":
        return "#222";

      case "secondary":
        return "#0982b3";

      case "warning":
        return "#f0cb0c";

      case "success":
        return "#09b209";

      case "error":
        return "#900";

      default:
        return this.color;
    }
  }
}

SFIcon.register();
