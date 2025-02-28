interface SVGP{
    image: string
}

export const SVG = (props: SVGP) =>{
    return (
        <div>
            <img src={props.image} />
        </div>
    );
}