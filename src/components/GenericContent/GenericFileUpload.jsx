import React from 'react';
import { translate } from 'react-i18next';
import Dropzone from 'react-dropzone';



import './GenericFileUpload.css';

const renderDropzoneInput = (field) => {
  const files = field.input.value;
  return (
    <div className="generic-file-upload">
      <Dropzone
        name={field.name}
        accept={"image/png, image/jpeg"}
        multiple={false}
        onDrop={(files, e) => field.input.onChange(files) }
          /*{
          const reader = new FileReader();
          const file = files[0]
          reader.readAsDataURL(file);

          field.input.onChange({ preview: file.preview, data: reader.result });
        }}*/
      >
        <div>Glissez/Déposez votre image ou cliquez ici pour la sélectionner</div>
      </Dropzone>
      {field.meta.touched &&
        field.meta.error &&
        <span className="error">{field.meta.error}</span>}
      {files && Array.isArray(files) && (
        files.map((file, i) => <img key={i} className="generic-file-preview" alt="file preview" src={file.preview} />)
      )}
    </div>
  );
}



export default translate('translations')(renderDropzoneInput);
