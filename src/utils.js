import 'babel-polyfill';

export const throttle = (func, wait) => {
  let context, args, prevArgs, argsChanged, result;
  let previous = 0;
  return function () {
    let now, remaining;
    if (wait) {
      now = Date.now();
      remaining = wait - (now - previous);
    }
    context = this;
    args = arguments;
    argsChanged = JSON.stringify(args) !== JSON.stringify(prevArgs);
    prevArgs = Object.assign({}, args);
    if (argsChanged || (wait && (remaining <= 0 || remaining > wait))) {
      if (wait) {
        previous = now;
      }
      result = func.apply(context, args);
      context = args = null;
    }
    return result;
  };
};

// https://codes-sources.commentcamarche.net/source/16330-verification-de-la-validite-des-codes-siret-et-siren-algo-de-luhn
export const isValidSiret = siret => {
  let estValide;
  siret = siret.replace(/\s+/g, '');
  if (siret) {
    if ((siret.length !== 14) || (isNaN(siret)))
      estValide = false;
    else {
      // Donc le SIRET est un numérique à 14 chiffres
      // Les 9 premiers chiffres sont ceux du SIREN (ou RCS), les 4 suivants
      // correspondent au numéro d'établissement
      // et enfin le dernier chiffre est une clef de LUHN.
      let somme = 0;
      let tmp;
      for (let cpt = 0; cpt < siret.length; cpt++) {
        if ((cpt % 2) === 0) { // Les positions impaires : 1er, 3è, 5è, etc...
          tmp = siret.charAt(cpt) * 2; // On le multiplie par 2
          if (tmp > 9)
            tmp -= 9;	// Si le résultat est supérieur à 9, on lui soustrait 9
        }
        else
          tmp = siret.charAt(cpt);
        somme += parseInt(tmp, 10);
      }
      if ((somme % 10) === 0)
        estValide = true; // Si la somme est un multiple de 10 alors le SIRET est valide
      else
        estValide = false;
    }
  }

  return estValide;
}

export const dateFormatter = dateToFormat => {
  const splittedDate = dateToFormat.split('-')
  return `${splittedDate[2]}/${splittedDate[1]}/${splittedDate[0]}`
}


export const normalizePhone = value => {
  if (!value) {
    return value;
  }

  const onlyNums = value.replace(/[^\d]/g, '');
  if (onlyNums.length <= 2) {
    return onlyNums;
  }
  if (onlyNums.length <= 4) {
    return `${onlyNums.slice(0, 2)}-${onlyNums.slice(2)}`;
  }
  if (onlyNums.length <= 6) {
    return `${onlyNums.slice(0, 2)}-${onlyNums.slice(2, 4)}-${onlyNums.slice(4)}`;
  }
  if (onlyNums.length <= 8) {
    return `${onlyNums.slice(0, 2)}-${onlyNums.slice(2, 4)}-${onlyNums.slice(4, 6)}-${onlyNums.slice(6)}`;
  }
  return `${onlyNums.slice(0, 2)}-${onlyNums.slice(2, 4)}-${onlyNums.slice(4, 6)}-${onlyNums.slice(6, 8)}-${onlyNums.slice(8, 10)}`;
};



export const filesReader = (uploadedFiles) => {
  const reader = new FileReader();
  return new Promise((resolve, reject) => {
    reader.onerror = () => {
      reader.abort();
      reject(new DOMException("Problem parsing input file."));
    };

    reader.onload = () => {
      resolve(reader.result);
    };
    reader.readAsDataURL(uploadedFiles[0]);
  });
}
