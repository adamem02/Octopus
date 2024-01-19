export class Shape {
    constructor() {
        this.color = '';
    }

    setColor(color) {
        this.color = color;
    }
}

export class Circle extends Shape {
    render(text, textColor) {
        const circleElement = `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
        const textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>`;

        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                  ${circleElement}
                  ${textElement}
                </svg>`;
    }
}

export class Square extends Shape {
    render(text, textColor) {
        const squareElement = `<rect x="50" height="200" width="200" fill="${this.color}" />`;
        const textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>`;

        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                  ${squareElement}
                  ${textElement}
                </svg>`;
    }
}

export class Triangle extends Shape {
    render(text, textColor) {
        const triangleElement = `<polygon points="100,10 40,198 190,78" fill="${this.color}" />`;
        const textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>`;

        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                  ${triangleElement}
                  ${textElement}
                </svg>`;
    }
}
