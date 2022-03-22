import { memo } from "react";
import { Card, Header, Image } from "semantic-ui-react";

interface Props {
    image: string;
    title: string;
}

export const CardComponent = memo(function CardComponent(props: Props) {
    const { image, title } = props;
    return (
        <Card>
            <Image size='mini' src={`http://image.tmdb.org/t/p/w500/${image}`}
                wrapped ui={false} />
            <Card.Content textAlign={"center"}>
                <Header >{title}</Header>
            </Card.Content>
        </Card>
    )
})
