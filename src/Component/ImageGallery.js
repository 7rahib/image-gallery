import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import image1 from '../Images/image-1.webp';
import image2 from '../Images/image-2.webp';
import image3 from '../Images/image-3.webp';
import image4 from '../Images/image-4.webp';
import image5 from '../Images/image-5.webp';
import image6 from '../Images/image-6.webp';
import image7 from '../Images/image-7.webp';
import image8 from '../Images/image-8.webp';
import image9 from '../Images/image-9.webp';
import image10 from '../Images/image-10.jpeg';
import image11 from '../Images/image-11.jpeg';
import addimage2 from '../Images/addimage2.png';
import './ImageGallery.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons';

//Tailwind CSS classes for image boxes
const image_box = "w-full rounded border border-2 border-gray-300 overflow-hidden bg-fixed opacity-100 transition duration-300 ease-in-out hover:opacity-50";
//Tailwind CSS classes for feature image box
const largerImageClass = "w-full col-span-2 row-span-2 rounded border border-2 border-gray-300 overflow-hidden bg-fixed opacity-100 transition duration-300 ease-in-out hover:opacity-50";

//Giving every image it's ID corresponding to the image source
const initialImages = [
    { id: 'image1', src: image1 },
    { id: 'image2', src: image2 },
    { id: 'image3', src: image3 },
    { id: 'image4', src: image4 },
    { id: 'image5', src: image5 },
    { id: 'image6', src: image6 },
    { id: 'image7', src: image7 },
    { id: 'image8', src: image8 },
    { id: 'image9', src: image9 },
    { id: 'image10', src: image10 },
    { id: 'image11', src: image11 }
];


const ImageGallery = () => {
    const [images, setImages] = useState(initialImages);
    const [selectedImages, setSelectedImages] = useState(new Set());

    //Grabbing the image with it's ID and putting it in the React State
    const toggleImageSelection = (imageId) => {
        const updatedSelection = new Set(selectedImages);

        if (updatedSelection.has(imageId)) {
            updatedSelection.delete(imageId);
        } else {
            updatedSelection.add(imageId);
        }

        setSelectedImages(updatedSelection);
    };

    // Function for deleting the image (Filtering out the image ID so that it doesn't show)
    const deleteSelectedImages = () => {
        const filteredImages = images.filter((image) => !selectedImages.has(image.id));
        setImages(filteredImages);
        setSelectedImages(new Set());
    };

    //Function for Dragging image by changing image index
    const onDragEnd = (result) => {
        if (!result.destination) {
            return;
        }

        const reorderedImages = Array.from(images);
        const [movedImage] = reorderedImages.splice(result.source.index, 1);
        reorderedImages.splice(result.destination.index, 0, movedImage);

        setImages(reorderedImages);
    };

    return (
        <div className="max-w-5xl p-5  mx-auto">
            <div className="border">
                <div>
                    <div className='p-2 flex justify-between'>
                        {/* Ternary operator by which number of selected images will be shown if image is */}
                        <div>
                            {selectedImages.size > 0 ?
                                <>
                                    <input type="checkbox" name="" className="mr-3" checked /> {selectedImages.size} Files selected
                                </>
                                : <p className='text-xl font-medium ml-4'>Gallery</p>
                            }
                        </div>
                        <div>
                            {/* Delete button appears when image is selected */}
                            {selectedImages.size > 0 && (
                                <button className='text-red-500' onClick={deleteSelectedImages}>Delete Files</button>
                            )}
                        </div>
                    </div>
                    {/* Made The image boxes draggable and rearrangable by using React DND library */}
                    <DragDropContext onDragEnd={onDragEnd}>
                        <Droppable droppableId="image-gallery" direction="horizontal">
                            {(provided) => (
                                <div
                                    {...provided.droppableProps}
                                    ref={provided.innerRef}
                                    className="grid-cols-5 p-10 space-y-2 lg:space-y-0 lg:grid lg:gap-2 lg:grid-rows-1"
                                >
                                    {/* Maped all images based on their ID and made them draggable by ID */}
                                    {images.map((image, index) => (
                                        <Draggable key={image.id} draggableId={image.id} index={index}>
                                            {(provided) => (
                                                <div
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    className={index === 0 ? largerImageClass : image_box}
                                                >
                                                    {/* Image Grid Box */}
                                                    <div className="image-card">
                                                        {/* Checkbox appears when hovered over to select*/}
                                                        <input
                                                            type="checkbox"
                                                            checked={selectedImages.has(image.id)}
                                                            onChange={() => toggleImageSelection(image.id)}
                                                            className="image-checkbox"
                                                        />
                                                        <img src={image.src} alt="gallery" className="image-preview" onClick={() => toggleImageSelection(image.id)} />
                                                        {/* Checkbox appears when selected */}
                                                        {selectedImages.has(image.id) && (
                                                            <div className="checkmark">
                                                                <FontAwesomeIcon icon={faSquareCheck} />
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            )}
                                        </Draggable>
                                    ))}
                                    {/* Add Image Card which is not draggabble of deletable */}
                                    <div className='w-fullrounded border border-gray-300 overflow-hidden bg-fixed'>
                                        <div className='flex justify-center items-center'>
                                            <div>
                                                <img src={addimage2} alt="" className='w-48' />
                                            </div>
                                        </div>
                                    </div>
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    </DragDropContext>
                </div>
            </div>
        </div>
    );
};


export default ImageGallery;