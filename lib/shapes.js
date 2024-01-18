export class Shape {
    constructor() {
        this.color = '';
    }

    setColor(color) {
        this.color = color;
    }
}

export class Circle extends Shape {
    render() {
        const svgContent = `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.color}">`;
        console.log('Generated Circle SVG Content:', svgContent);
        return svgContent;
    }
}

export class Square extends Shape {
    render() {
        const svgContent = `<rect x="50" height="200" width="200" fill="${this.color}">`;
        console.log('Generated Square SVG Content:', svgContent);
        return svgContent;
    }
}

export class Triangle extends Shape {
    render() {
        const svgContent = `<polygon points="100,10 40,198 190,78" fill="${this.color}">`;
        console.log('Generated Triangle SVG Content:', svgContent);
        return svgContent;
    }
}
