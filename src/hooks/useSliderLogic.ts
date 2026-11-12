import { useRef, useState } from 'react';

import annualImage from '@/assets/slider-plant-images/annual-image.jpg';
import aroidImage from '@/assets/slider-plant-images/aroid-image.jpg';
import bulbImage from '@/assets/slider-plant-images/bulb-image.jpg';
import floweringImage from '@/assets/slider-plant-images/flowering-image.jpg';
import foliageImage from '@/assets/slider-plant-images/foliage-image.jpg';
import herbImage from '@/assets/slider-plant-images/herb-image.jpg';
import perennialImage from '@/assets/slider-plant-images/perennial-image.jpg';
import shrubImage from '@/assets/slider-plant-images/shrub-image.jpg';
import succulentsImage from '@/assets/slider-plant-images/succulent-png.png';
import treeImage from '@/assets/slider-plant-images/tree-image.jpg';
import tropicalImage from '@/assets/slider-plant-images/tropical-png.png';
import vineImage from '@/assets/slider-plant-images/vine-image.jpg';
import { FILTER_DEFAULTS } from '@/constants/api';
import { FILTER_OPTIONS } from '@/constants/filters';

export const DIRECTION = {
  left: 'left',
  right: 'right',
} as const;

type ScrollDirection = keyof typeof DIRECTION;

const SCROLL_AMOUNT = 1230;

const TYPE_IMAGE_MAP: Record<string, string> = {
  Tropical: tropicalImage,
  Vine: vineImage,
  Foliage: foliageImage,
  Tree: treeImage,
  Flowering: floweringImage,
  Succulent: succulentsImage,
  Aroid: aroidImage,
  Shrub: shrubImage,
  Perennial: perennialImage,
  Bulb: bulbImage,
  Annual: annualImage,
  Herb: herbImage,
};

const plantsTypeList = FILTER_OPTIONS.all
  .filter((type) => type !== FILTER_DEFAULTS.ALL)
  .map((type) => ({
    typeValue: type,
    title: type,
    image: TYPE_IMAGE_MAP[type],
  }));

export const useSliderLogic = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const [lastDirection, setLastDirection] = useState<ScrollDirection>(DIRECTION.left);

  const isLeftDisabled = lastDirection === DIRECTION.left;
  const isRightDisabled = lastDirection === DIRECTION.right;

  const handleScroll = (direction: ScrollDirection) => {
    if (sliderRef.current) {
      const currentScroll = sliderRef.current.scrollLeft;

      setLastDirection(direction);

      sliderRef.current.scrollTo({
        left:
          direction === DIRECTION.left
            ? currentScroll - SCROLL_AMOUNT
            : currentScroll + SCROLL_AMOUNT,
        behavior: 'smooth',
      });
    }
  };

  return { plantsTypeList, handleScroll, sliderRef, isLeftDisabled, isRightDisabled };
};
