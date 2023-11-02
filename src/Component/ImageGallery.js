import React from 'react';
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
import addimage from '../Images/addimage.png';

const image_box = "w-full rounded border border-gray-300 overflow-hidden bg-fixed opacity-100 transition duration-300 ease-in-out hover:opacity-50";

const imageGallery = () => {
    return (
        <div className='p-5'>
            <div className='border'>
                <div class="mx-auto">
                    <div className='p-2 flex justify-between'>
                        <div>
                            <input type="checkbox" name="" className='mr-3' />
                            0 Files selected
                        </div>
                        <div>
                            <button className='text-red-500'>Delete Files</button>
                        </div>
                    </div>
                    <div class="grid-cols-5 p-10 space-y-2 lg:space-y-0 lg:grid lg:gap-2 lg:grid-rows-1">
                        <div class="w-full col-span-2 row-span-2 rounded border border-gray-300 overflow-hidden bg-gray-700 bg-fixed opacity-100 transition duration-300 ease-in-out hover:opacity-50">
                            <img src={image1} alt="gallery" />
                        </div>
                        <div class={image_box}>
                            <img src={image2} alt="gallery" />
                        </div>

                        <div class={image_box}>
                            <img src={image3} alt="gallery" />
                        </div>
                        <div class={image_box}>
                            <img src={image4} alt="gallery" />
                        </div>
                        <div class={image_box}>
                            <img src={image5} alt="gallery" />
                        </div>
                        <div class={image_box}>
                            <img src={image6} alt="gallery" />
                        </div>
                        <div class={image_box}>
                            <img src={image7} alt="gallery" />
                        </div>
                        <div class={image_box}>
                            <img src={image8} alt="gallery" />
                        </div>
                        <div class={image_box}>
                            <img src={image9} alt="gallery" />
                        </div>
                        <div class={image_box}>
                            <img src={image10} alt="gallery" />
                        </div>
                        <div class={image_box}>
                            <img src={image11} alt="gallery" />
                        </div>
                        <div class={image_box}>
                            <div className="h-full flex justify-center items-center overflow-hidden">
                                <div className="text-center p-4">
                                    <img
                                        src={addimage}
                                        alt="Icon"
                                        className="w-8 h-8 mx-auto"
                                    />
                                    <p className="mt-4 text-lg font-semibold">Add Images</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default imageGallery;