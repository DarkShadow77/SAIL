const add = (a:number, b:number) =>a+b;

console.log(add(3,2));


async function getResource(url: string) :Promise<any> {
    try {
        let res = await fetch(url);
        let data = res.json();
        return data;
    } catch (error:any) {
        console.log(error.message);
    }
}

function areaRect(area: {l: number, b:number, c?: boolean}){
    return area.l * area.b
}

areaRect({l: 39, b: 78})