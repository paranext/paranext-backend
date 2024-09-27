import { Slider } from '@/components/shadcn-ui/slider';
import { useState } from 'react';

export default function SliderExamples() {
  const [sliderValue, setSlider] = useState<number[]>([33]);
  return (
    <>
      <Slider
        className="pr-h-10"
        min={0}
        max={100}
        step={1}
        value={sliderValue}
        onValueChange={setSlider}
      />
      {sliderValue}

      <Slider className="pr-h-10" disabled min={0} max={100} step={1} defaultValue={[50]} />
    </>
  );
}