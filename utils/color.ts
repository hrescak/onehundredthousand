import chroma from 'chroma-js'

export const shadeForPopulation = (pop:number) => {
    const max = 110000
    const min = 90000
    const maxNew = 1
    const minNew = 0.3
    const newValue = (((pop - min) * (maxNew - minNew)) / (max - min)) + minNew
    return chroma.hsv(0,0,newValue).hex();
}