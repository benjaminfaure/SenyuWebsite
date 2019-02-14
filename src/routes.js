import App from './components/App.jsx';

import MainPage from './components/MainPage/MainPage.jsx';

import Inscriptions from './components/Inscriptions/Inscriptions.jsx';
import GenericRegistrationForm from './components/Inscriptions/GenericRegistrationForm.jsx';

import Intervenant from './components/Intervenants/Intervenant.jsx';
import Intervenants from './components/Intervenants/Intervenants.jsx';

import Animations from './components/Animations/Animations.jsx';
import Animation from './components/Animations/Animation.jsx';

import Exposant from './components/Exposants/Exposant.jsx';
import Exposants from './components/Exposants/Exposants.jsx';

import FAQ from './components/FAQ/FAQ.jsx';

import Stream from './components/Stream/Stream.jsx';

import CG from './components/CG/CG.jsx';

import Cosplay from './components/Cosplay/Cosplay.jsx';

import Communication from './components/Communication/Communication.jsx';

import Reglements from './components/Reglements/Reglements.jsx';
import Reglement from './components/Reglements/Reglement.jsx';

import Contact from './components/Contact/Contact.jsx';

import Recrutement from './components/Recrutement/Recrutement.jsx';

import Billeterie from './components/Billeterie/Billeterie.jsx';

import Planning from './components/Planning/Planning.jsx';

import Plans from './components/Plans/Plans.jsx';

import Partenaires from './components/Partenaires/Partenaires.jsx';

import Guide from './components/Guide/Guide.jsx';

import EnTravaux from './components/EnTravaux/EnTravaux.jsx';

//import Redirect from './components/Redirect/Redirect.jsx';

import NotFound from './components/NotFound/NotFound.jsx';




const routes = [
  {
    component: App,
    routes: [
      {
        path: '/',
        exact: true,
        component: MainPage
      },
      /* Inscriptions */
      {
        path: '/inscription',
        exact: true,
        component: Inscriptions
      },
      {
        path: '/inscription/:registrationType',
        component: GenericRegistrationForm
      },
      /* Intervenants */
      {
        path: '/invites',
        exact: true,
        component: Intervenants
      },
      {
        path: '/invites/:intervenantId',
        component: Intervenant
      },
      /* Exposants */
      {
        path: '/exposants',
        exact: true,
        component: Exposants
      },
      {
        path: '/exposants/:exposantId',
        component: Exposant
      },
      /* Animations */
      {
        path: '/animations',
        exact: true,
        component: Animations
      },
      {
        path: '/animations/:animationId',
        component: Animation
      },
      /* FAQ */
      {
        path: '/faq',
        exact: true,
        component: FAQ
      },
      /* Reglements */
      {
        path: '/reglements',
        exact: true,
        component: Reglements
      },
      {
        path: '/reglements/:reglementType',
        component: Reglement
      },
      /* Plans */
      {
        path: '/plans',
        exact: true,
        component: Plans
      },
      /* Planning */
      {
        path: '/planning',
        exact: true,
        component: Planning
      },
      /* Guide */
      /*{
        path: '/guide',
        exact: true,
        component: Guide
      },*/
      /* CG */
      {
        path: '/cg',
        exact: true,
        component: CG
      },
      /* Contact */
      {
        path: '/contact',
        exact: true,
        component: Contact
      },
      /* Cosplay */
      {
        path: '/cosplay',
        exact: true,
        component: Cosplay
      },
      /* Communication */
      {
        path: '/communication',
        exact: true,
        component: Communication
      },
      /* Stream */
      {
        path: '/stream',
        exact: true,
        component: Stream
      },
      /* Archive */
      {
        path: '/archive',
        exact: true,
        component: EnTravaux
      },
      /* Partenaires */
      {
        path: '/partenaires',
        exact: true,
        component: Partenaires
      },
      /* Recrutement */
      {
        path: '/recrutement',
        exact: true,
        component: Recrutement
      },
      /* Billeterie */
      {
        path: '/billeterie',
        exact: true,
        component: Billeterie
      },
      /* 404 */
      {
        path: '*',
        component: NotFound
      },
    ]
  }
];

export default routes;

