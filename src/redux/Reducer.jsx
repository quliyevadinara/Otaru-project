const initialState = localStorage.getItem("Blogs")
  ? JSON.parse(localStorage.getItem("Blogs"))
  : [
      {
        image:
          "https://images.unsplash.com/photo-1560762484-813fc97650a0?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Mekanik və Membran Klaviaturalar",
        description:
          "İki əsas klaviatura növü var: mekanik və membran. Mekanik klaviaturalar, hər bir düymənin ayrı ayrı bir çəkmə tədbirinə malik olduğu və daha yüksək performans və keyfiyyət təmin edən yay kəsici mekanizmalara malikdir. Membran klaviaturalar, daha yumşaq və sessizdirlər və əsasən daha ucuzdur.Bir çox klaviatura, kompakt və hətta kablosuz versiyalarda gəlir. Bu, istifadəçilərin klaviaturanı rahatca aparata qoymasına və istədikləri yerdə işləməsinə imkan verir.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Dizayn və Estetika",
        description:
          "Smart saatlar, klassik saat dizaynlarına və ya daha müasir və incə dizaynlara malik ola bilər. Bəzi modellər moda və stil trendlərinə uyğun fərqli qablarla təchiz olunmuşdur. Bir çox smart saatlar su dayanıqlılığı ilə təchiz olunmuşdur. Bu, istifadəçilərin hərəkət halında, istirahətdə və ya suya təmas etdiklərində saatlarını istifadə etmələrini təmin edir.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Əyləncə və Məlumat",
        description:
          "Qulaqlıq telefonlar, musiqi dinləmək, podcast və audiobooklar eşitmək və müxtəlif multimedia məzmunları baxmaq üçün əla bir vasitədir. Gündəlik həyatda stresi azaldır və insanlara məlumat və əyləncə təmin edir. Qulaqlıq telefonlar, insanların hər zaman və hər yerdə əlaqədə olmaq və işləmək imkanı yaradır. Artıq işlər, ailə və dostlarla əlaqə qura bilər və müxtəlif iş və öyrənmə fırsatlarından istifadə edə bilərsiniz.",
      },
    ];

export const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_BLOG":
      return [...state, action.payload];
    case "REMOVE_BLOG":
      return state.filter((item) => item.id !== action.payload);
    case "EDIT_BLOG":
      const myBlogs = state.map((item) => {
        if (item.id == action.payload.id) {
          return action.payload;
        } else {
          return item;
        }
      });
      return (state = myBlogs);
    default:
      return state;
  }
};
