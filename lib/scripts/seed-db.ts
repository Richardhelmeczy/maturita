import { createDB } from "../../src/lib/db";
import { faker } from "@faker-js/faker";

async function seedDB() {
  console.log("Seeding database...");

  const db = createDB();

  await db.deleteFrom("productsReviews").execute();
  await db.deleteFrom("basket").execute();
  await db.deleteFrom("productsPhotos").execute();
  await db.deleteFrom("products").execute();
  await db.deleteFrom("appointments").execute();
  await db.deleteFrom("doctors").execute();

  const products = [];

  products.push(
    {
      name: "Elektronický tlakomer",
      description: "Presný elektronický tlakomer na meranie krvného tlaku.",
      price: 49.99,
    },
    {
      name: "Prenosný pulzoxymeter",
      description: "Zariadenie na meranie hladiny kyslíka v krvi a pulzu.",
      price: 29.99,
    },
    {
      name: "Chirurgická maska s filtráciou",
      description:
        "Jednorazová chirurgická maska s vysokou účinnosťou filtračného systému.",
      price: 0.99,
    },
    {
      name: "Termofór na teplú vodu",
      description: "Veľký termofór na udržanie tepla vody na liečbu bolestí.",
      price: 14.99,
    },
    {
      name: "Teplomer na čelo",
      description: "Bezkontaktný teplomer určený na meranie teploty na čelo.",
      price: 24.99,
    },
    {
      name: "Elastická bandáž",
      description: "Elastická bandáž na fixáciu zranení a podporu kĺbov.",
      price: 5.99,
    },
    {
      name: "Inhalátor",
      description: "Kompaktný inhalátor na liečbu dýchacích problémov.",
      price: 39.99,
    },
    {
      name: "Chladivý gél na svaly",
      description: "Gél určený na uvoľnenie napätia a bolesti svalov.",
      price: 9.99,
    },
    {
      name: "Kompresný obväz",
      description: "Sterilný obväz určený na rýchlu úpravu ran.",
      price: 2.49,
    },
    {
      name: "Náplasť na bradavice",
      description:
        "Náplasť impregnovaná liečivou látkou na odstránenie bradavíc.",
      price: 3.99,
    },
    {
      name: "Teplá lavačka",
      description: "Klasická lávová fľaša na udržanie tepla na telesnú liečbu.",
      price: 7.99,
    },
    {
      name: "Elektrická masážna podložka",
      description:
        "Podložka s integrovanými masážnymi funkciami na uvoľnenie svalov.",
      price: 69.99,
    },
    {
      name: "Ochranné rukavice",
      description: "Jednorazové ochranné rukavice na hygienické účely.",
      price: 0.49,
    },
    {
      name: "Sterilný alkoholový tampón",
      description: "Sterilný tampón impregnovaný alkoholom na dezinfekciu rán.",
      price: 0.29,
    },
    {
      name: "Kompress spray na bolesti",
      description: "Univerzálny sprej na rýchle zmiernenie bolesti a opuchov.",
      price: 12.99,
    },
    {
      name: "Kompaktná pohotovostná sada",
      description:
        "Sada obsahujúca základné prvky na poskytnutie prvej pomoci.",
      price: 19.99,
    },
    {
      name: "Magnetický náprstok na artritídu",
      description:
        "Magnetický náprstok určený na zmiernenie bolesti pri artritíde.",
      price: 8.99,
    },
    {
      name: "Sterilný náplasťový materiál",
      description: "Rôzne veľkosti sterilných náplastí na úpravu rán.",
      price: 3.49,
    },
    {
      name: "Elektrický kŕčový žilový masér",
      description: "Zariadenie na stimuláciu cirkulácie a liečbu kŕčových žíl.",
      price: 89.99,
    },
    {
      name: "Kompresná vreckovka",
      description:
        "Jednorazová kompresná vreckovka na absorpciu krvi a tekutín.",
      price: 1.99,
    },
    {
      name: "Ultrazvukový inhalátor",
      description:
        "Inovatívny inhalátor s ultrazvukovou technológiou na efektívnu liečbu dýchacích problémov.",
      price: 59.99,
    },
    {
      name: "Elektronický fyzioterapeutický prístroj",
      description:
        "Profesionálny fyzioterapeutický prístroj s rôznymi režimami na liečbu svalových a kĺbových problémov.",
      price: 129.99,
    },
    {
      name: "Sterilný obväzový set",
      description:
        "Kompletný set sterilných obväzových materiálov rôznych veľkostí na úpravu rôznych typov rán.",
      price: 8.49,
    },
    {
      name: "Digitálny zdravotný záznamník",
      description:
        "Modulárny zdravotný záznamník so schopnosťou sledovať vitálne znaky a zaznamenávať zdravotný stav pacienta.",
      price: 149.99,
    },
    {
      name: "Špeciálny pohybový bandážer",
      description:
        "Bandážer s vylepšeným dizajnom na podporu pohybu a obnovu svalových tkanív.",
      price: 34.99,
    },
    {
      name: "Bezdotykový teplomer s ďalším vybavením",
      description:
        "Moderný bezdotykový teplomer s doplnkovými funkciami, ako je meranie saturácie kyslíka a pulzu.",
      price: 79.99,
    },
    {
      name: "Multifunkčný masážny valec",
      description:
        "Masážny valec s rôznymi povrchovými textúrami a vibračnými režimami na úľavu od svalového napätia.",
      price: 42.49,
    },
    {
      name: "Rehabilitačný gumový pánt",
      description:
        "Gumový pánt určený na cvičenie a rehabilitáciu rôznych svalových skupín.",
      price: 6.99,
    },
    {
      name: "Automatický tlakomerný monitor",
      description:
        "Automatický monitor na meranie krvného tlaku s možnosťou pripojenia k smartfónu a sledovania výsledkov.",
      price: 89.99,
    },
    {
      name: "Hygienické dezinfekčné utierky",
      description:
        "Utierky navlhčené dezinfekčným roztokom na rýchlu a efektívnu dezinfekciu rúk a povrchov.",
      price: 4.29,
    },
    {
      name: "Elektrická stimulačná jednotka",
      description:
        "Jednotka na elektrickú stimuláciu svalov na rýchlu úľavu od bolesti a zlepšenie svalovej funkcie.",
      price: 99.99,
    },
    {
      name: "Špeciálna kĺbová podpora",
      description:
        "Podpora s špeciálnym tvarom určená na stabilizáciu a ochranu kĺbov počas rehabilitácie.",
      price: 17.49,
    },
    {
      name: "Nanotechnologický obväz",
      description:
        "Inovatívny sterilný obväz impregnovaný nanočasticami na rýchlu regeneráciu a hojenie rán.",
      price: 5.99,
    },
    {
      name: "Vakuový masážny prístroj",
      description:
        "Prístroj na vakuovú masáž s rôznymi nástavcami na rôzne časti tela a rôzne typy masáže.",
      price: 74.99,
    },
    {
      name: "Profesionálna ošetrovateľská uniforma",
      description:
        "Kvalitná a pohodlná uniforma pre zdravotníkov a ošetrovateľský personál.",
      price: 29.99,
    },
    {
      name: "Chirurgický skalpel s výmenou čepelí",
      description:
        "Kvalitný chirurgický skalpel so systémom na rýchlu a bezpečnú výmenu čepelí.",
      price: 12.99,
    },
    {
      name: "Magnetoterapeutické pásy",
      description:
        "Pásy s malými magnetmi na liečbu bolesti a zlepšenie cirkulácie v postihnutých oblastiach.",
      price: 24.99,
    },
    {
      name: "Kompaktný ultrafialový sterilizátor",
      description:
        "Ultrafialový sterilizátor pre rýchlu a účinnú dezinfekciu rôznych povrchov a predmetov.",
      price: 39.99,
    },
    {
      name: "Antibakteriálny mydlový dispenser",
      description:
        "Automatický dispenser na tekuté mydlo s antibakteriálnym účinkom na hygienické umývanie rúk.",
      price: 19.99,
    },
    {
      name: "Dokumentačný skener pre zdravotníckych pracovníkov",
      description:
        "Kompaktný skener určený na rýchle a efektívne skenovanie lekárskych dokumentov a záznamov.",
      price: 149.99,
    }
  );

  await db.insertInto("products").values(products).execute();
  const createdProducts = await db
    .selectFrom("products")
    .select("id")
    .execute();
    
    const reviews = []
    
    for (const createdProduct of createdProducts) {
      console.log(createdProduct.id)
      
      const nReviews = faker.number.int({ min: 0, max: 5 })
      
      for (let i = 0; i < nReviews; i++) {
        reviews.push({
          productId: createdProduct.id,
          rating: faker.number.int({ min: 1, max: 5 }),
          content: faker.lorem.sentences({ min: 1, max: 5 }),
          username: faker.internet.userName(),
        })
      }
      
    }
    
    const photos = []
    photos.push(
      {
        productId: 1,
      url:
        "https://www.tonerpartner.sk/userdata/products/1187/1605138_0c-fdd16ed6e1bfd91.jpg",
      },
      {
        productId: 2,
      url:
        "https://www.zdravplus.sk/wp-content/uploads/2022/04/checkme-pod-Bild3.jpg",
      },
      {
        productId: 3,
      url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiz4XCF-iL7ySMixRvqy23tWiyyz7DvS2_pXlP9B3rQg&s",
      },
      {
        productId: 4,
      url:
        "https://cdn.notinoimg.com/social/simplymed/769503433417_01-o/simplymed-termofor-2-l-termofor-na-teplu-a-studenu-terapiu___230512.jpg",
      },
    )


    if (reviews.length > 0) {
      await db.insertInto('productsReviews').values(reviews).execute()
    }
    
    if (photos.length > 0) {
      await db.insertInto('productsPhotos').values(photos).execute()
    }
    

  const doctors = [];
  doctors.push(
    {
      id: "user_2cPXGhoI9XD4fjzJL1VwMbZwqQp",
      firstname: "Nikola",
      lastname: "Urbanová",
      email: "nikola@urbanova.sk",
      adress: "Jesienná 852, Žiar nad Hronom",
      phone: "+421 908 123 456",
    },
    {
      id: "user_2cd4darbRsBgTdKneZcSI3Er33Z",
      firstname: "Filip",
      lastname: "Petrovič",
      email: "filip@petrovic.sk",
      adress: "Žitná 369, Trnava",
      phone: "+421 909 654 321",
    }
  );

  doctors.push(
    {
      id: "user_1",
      firstname: "Andrej",
      lastname: "Kováč",
      email: "andrej@kovac.sk",
      adress: "Hlavná 123, Bratislava",
      phone: "+421 901 123 456",
    },
    {
      id: "user_2",
      firstname: "Monika",
      lastname: "Nováková",
      email: "monika@novakova.sk",
      adress: "Mierová 456, Košice",
      phone: "+421 902 654 321",
    },
    {
      id: "user_3",
      firstname: "Lukáš",
      lastname: "Hruška",
      email: "lukas@hruska.sk",
      adress: "Športová 789, Žilina",
      phone: "+421 903 987 654",
    },
    {
      id: "user_4",
      firstname: "Silvia",
      lastname: "Šimáková",
      email: "silvia@simakova.sk",
      adress: "Sadová 987, Nitra",
      phone: "+421 904 321 789",
    },
    {
      id: "user_5",
      firstname: "Tomáš",
      lastname: "Horváth",
      email: "tomas@horvath.sk",
      adress: "Dubová 654, Trenčín",
      phone: "+421 905 678 123",
    },
    {
      id: "user_6",
      firstname: "Dominika",
      lastname: "Tomášová",
      email: "dominika@tomasova.sk",
      adress: "Javorová 321, Prešov",
      phone: "+421 906 543 789",
    },
    {
      id: "user_7",
      firstname: "Adam",
      lastname: "Mikuláš",
      email: "adam@mikulas.sk",
      adress: "Lesná 147, Banská Bystrica",
      phone: "+421 907 876 234",
    }
  );

  await db.insertInto("doctors").values(doctors).execute();

  console.log("Done");
}
seedDB();
