import noImage from '../assets/_Gift Voucher 329 (1040 × 1040 px) (22).png'


const getCroppedImageUrl = (url : string) => {
    if(!url) return noImage
    const target = 'media/';
    const index = url.indexOf(target) + target.length;
    return url.slice(0, index) + 'crop/600/400/' + url.slice(index);
}

export default getCroppedImageUrl;