const translations = {
    en: {
      flag: "gb",
      en: "english",
      fr: "french",
      sp: "spanish",
      login: "sign in",
      email: "email",
      password: "password",
      remember: "remember me",
      search: "search",
      title: "peel me a grape"
    },
    fr: {
      flag: "fr",
      en: "anglais",
      fr: "français",
      sp: "espagnol",
      login: "se connecter",
      email: "email",
      password: "mot de passe",
      remember: "souviens-toi de moi",
      search: "chercher",
      title: "épluche-moi un raisin"
    },
    sp: {
      flag: "es",
      en: "inglés",
      fr: "francés",
      sp: "español",
      login: "registrarse",
      email: "correo electrónico",
      password: "contraseña",
      remember: "recuérdame",
      search: "buscar",
      title: "pelame una uva"
    }
  }

  export function translate(language, word, convert = "camel") {
    const w = translations[language][word];

    if (!w) {
      return "<No translation available>";
    }

    if (convert === "camel") {
      return w.split(' ').map(t => t.substr(0,1).toUpperCase() + t.substr(1)).join(' ');
    } else if (convert === "upper") {
      return w.split(' ').map(t => t.toUpperCase()).join(' ');
    } else {
      return w;
    }
  }
