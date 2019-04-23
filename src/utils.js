import 'core-js/stable';
import 'regenerator-runtime/runtime';

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

/*
 * JavaScript implementation of the Luhn algorithm, with calculation and validation functions
 */



export const luhn_calculate = (value, typeIntervenant) => {
  // accept only digits, dashes or spaces
  if (/[^0-9-\s]+/.test(value)) return false;
  if (value === '00000000000000' && typeIntervenant !== 'createur') return false;
  // The Luhn Algorithm. It's so pretty.
  let nCheck = 0, nDigit = 0, bEven = false;
  value = value.replace(/\D/g, "");

  for (var n = value.length - 1; n >= 0; n--) {
    let cDigit = value.charAt(n);
    nDigit = parseInt(cDigit, 10);

    if (bEven) {
      if ((nDigit *= 2) > 9) nDigit -= 9;
    }

    nCheck += nDigit;
    bEven = !bEven;
  }

  return (nCheck % 10) === 0;
}

// https://codes-sources.commentcamarche.net/source/16330-verification-de-la-validite-des-codes-siret-et-siren-algo-de-luhn
export const isValidSiret = (siret, typeIntervenant) => {
  let estValide;
  siret = siret.replace(/\s+/g, '');
  if (siret) {
    if ((siret.length !== 14) || (isNaN(siret)))
      estValide = false;
    else if (siret === '00000000000000' && typeIntervenant !== 'createur') {
      estValide = false;
    }
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

export const normalizeBirthDay = value => {
  if (!value) {
    return value;
  }

  const onlyNums = value.replace(/[^\d]/g, '');
  if (onlyNums.length <= 2) {
    return onlyNums;
  }
  if (onlyNums.length <= 4) {
    return `${onlyNums.slice(0, 2)}/${onlyNums.slice(2)}`;
  }
  if (onlyNums.length <= 8) {
    return `${onlyNums.slice(0, 2)}/${onlyNums.slice(2, 4)}/${onlyNums.slice(4)}`;
  }
  return `${onlyNums.slice(0, 2)}/${onlyNums.slice(2, 4)}/${onlyNums.slice(4, 8)}`;
};

export const normalizeFacebooUrl = (facebook) => {
  if (facebook.slice(-1) === "/") {
    return facebook.slice(0, -1);
  }
  return facebook;
}

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
