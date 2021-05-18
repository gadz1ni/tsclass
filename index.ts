abstract class Cars {

    protected constructor(
        public readonly BrandCar: string,
        public readonly ModelCar: string,
        public readonly ColorCar: string,
        public readonly YearCar: number,
        private readonly _NumberCar: string,
        private readonly _OwnerCar: string,
        private readonly _IdCarLicense: number
    ) {}

    public getBrand(): string {
        return this.BrandCar
    }
    public getModel(): string {
        return this.ModelCar
    }
    public getColor(): string {
        return this.ColorCar
    }
    public getYear(): number {
        return this.YearCar
    }
    private getNumber(): string {
        return this._NumberCar
    }
    private getOwner(): string {
        return this._OwnerCar
    }
    private getIdLicense(): number {
        return this._IdCarLicense
    }
}


class BodyType extends Cars {
    BodyCar: string
    HorsePower: number

    constructor(
        BrandCar: string,
        ModelCar: string,
        ColorCar: string,
        YearCar: number,
        _NumberCar: string,
        _OwnerCar: string,
        _IdCarLicense: number,
        BodyCar: string,
        HorsePower: number
    ) {
        super(BrandCar, ModelCar, ColorCar, YearCar, _NumberCar, _OwnerCar, _IdCarLicense)
        this.BodyCar = BodyCar
        this.HorsePower = HorsePower
    }

    showInfo(): string {
        return `Car brand - ${this.BrandCar}; model - ${this.ModelCar}; color - ${this.ColorCar}; date of issue - ${this.YearCar}; body car - ${this.BodyCar}; power - ${this.HorsePower}`
    }
}

class PowerCar extends Cars {
    HorsePower: number
    BodyCar: string

    constructor(
        BrandCar: string,
        ModelCar: string,
        ColorCar: string,
        YearCar: number,
        _NumberCar: string,
        _OwnerCar: string,
        _IdCarLicense: number,
        BodyCar: string,
        HorsePower: number
    ) {
        super(BrandCar, ModelCar, ColorCar, YearCar, _NumberCar, _OwnerCar, _IdCarLicense)
        this.HorsePower = HorsePower
        this.BodyCar = BodyCar
    }

    showInfo(): string {
        return `Car brand - ${this.BrandCar}; model - ${this.ModelCar}; color - ${this.ColorCar}; date of issue - ${this.YearCar}; body car - ${this.BodyCar}; power - ${this.HorsePower}`
    }
}

const firstCar = new BodyType(
    'Mercedes-Benz',
    'E 63S',
    'Black',
    2019,
    'AE6300BI',
    'Oleg Olegovich',
    123456,
    'Sedan',
    550
);

const secondCar = new PowerCar(
    'Lamborghini',
    'Urus',
    'Yellow',
    2020,
    'AE1234BI',
    'Stepan Stepanovich',
    654321,
    'SUV',
    750
);

console.log(firstCar.showInfo());
console.log(secondCar.showInfo());