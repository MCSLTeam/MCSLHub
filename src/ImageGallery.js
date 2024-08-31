import React, { useEffect, useState } from 'react';
import Masonry from 'react-masonry-css';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

function ImageGallery() {
    const [images, setImages] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/fetch-images.php')
            .then((response) => response.json())
            .then((data) => {
                setImages(data.filter(item => item.type === 'file' && item.download_url));
            });
    }, []);

    const breakpointColumnsObj = {
        default: 4,
        1100: 3,
        700: 2,
        500: 1
    };

    return (
        <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column">
            {images.map((image) => (
                <Card key={image.sha} sx={{ borderRadius: 2, marginTop: 8, marginBottom: 4, marginLeft: 2, marginRight: 2 }}>
                    <CardMedia
                        component="img"
                        height="200"
                        image={image.download_url}
                        alt={image.name}
                        sx={{ borderRadius: 2 }}
                    />
                    <CardContent>
                        <Typography variant="h6" component="div">
                            {image.name}
                        </Typography>
                    </CardContent>
                </Card>
            ))}
        </Masonry>
    );
}

export default ImageGallery;
