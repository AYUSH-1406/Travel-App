export const IMAGES={
    TRIVY_BANNER:require('./images/trivy-banner.png'),
    EMPTY_TRIPS:require('./images/empty.png'),
    EMPTY_EXPENSES:require('./images/empty.png'),
    ADD_EXPENSES_BANNER:require('./images/add-expenses.png'),
    
};

export const ICONS={
    BACK:require('./icons/back.png'),
};

export const THUMBNAILS={
    1:require('./images/trips-thumbnail/1.png'),
    2:require('./images/trips-thumbnail/2.png'),
    3:require('./images/trips-thumbnail/3.png'),
    4:require('./images/trips-thumbnail/4.png'),
    5:require('./images/trips-thumbnail/5.png'),
    6:require('./images/trips-thumbnail/6.png'),
    7:require('./images/trips-thumbnail/7.png'),
    8:require('./images/trips-thumbnail/8.png'),
    9:require('./images/trips-thumbnail/9.png'),
    10:require('./images/trips-thumbnail/10.png'),
};

export const RANDOM_THUMBNAIL=()=>{
    const rand=Math.floor(Math.random()*10);
    return THUMBNAILS[rand];
};