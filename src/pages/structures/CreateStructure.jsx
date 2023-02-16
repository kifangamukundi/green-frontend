import React, {useState} from 'react';
import { Tiptap, TipTapPreview } from '../../components';

export default function CreateStructure() {
  const [description, setDescription] = useState("");
  return (
    <div className="container w-full md:max-w-3xl mx-auto pt-20">
      <Tiptap setDescription={setDescription} />

      {/* preview */}
      <TipTapPreview description={description} />
    </div>
  )
}
