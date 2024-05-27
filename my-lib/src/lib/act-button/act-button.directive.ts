import {Directive, HostBinding, Input} from '@angular/core';
import {cva, VariantProps} from "class-variance-authority";
import {cn} from "../utils";
import {ClassValue} from "clsx";




export const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "underline-offset-4 hover:underline text-primary",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);
export type ButtonVariants = VariantProps<typeof buttonVariants>;

@Directive({
  selector: '[actButton]',
  standalone: true,
})
export class ActButtonDirective {
  private _variant: ButtonVariants["variant"] = "default";
  @Input()
  get variant(): ButtonVariants["variant"] {
    return this._variant;
  }

  set variant(value: ButtonVariants["variant"]) {
    this._variant = value;
    this._class = this.generateClasses();
  }

  private _size: ButtonVariants["size"] = "default";
  @Input()
  get size(): ButtonVariants["size"] {
    return this._size;
  }

  set size(value: ButtonVariants["size"]) {
    this._size = value;
    this._class = this.generateClasses();
  }

  private _inputs: ClassValue = "";

  @Input()
  set class(inputs: ClassValue) {
    this._inputs = inputs;
    this._class = this.generateClasses();
  }

  @HostBinding("class")
  private _class = this.generateClasses();

  private generateClasses() {
    return cn(buttonVariants({ variant: this._variant, size: this._size }), this._inputs);
  }
}
