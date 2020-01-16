const menuList = ['⌘ 1', '⌘ 2', '⌘ 3'];
const articlesList = [{
        title: 'Article 1',
        shortDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
        detailTitle: '1914 translation by H. Rackham',
        subTitle: 'Written by Cicero in 45 BC',
        longDesc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem',
        imageUrl: 'assets/banner.gif',
        imageTitle: '1914 translation by H. Rackham'
    },
    {
        title: 'Article 2',
        shortDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
        detailTitle: '1914 translation by H. Rackham',
        subTitle: 'Written by Cicero in 45 BC',
        longDesc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem',
        imageUrl: 'assets/banner.gif',
        imageTitle: '1914 translation by H. Rackham'
    },
    {
        title: 'Article 3',
        shortDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
        detailTitle: '1914 translation by H. Rackham',
        subTitle: 'Written by Cicero in 45 BC',
        longDesc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem',
        imageUrl: 'assets/banner.gif',
        imageTitle: '1914 translation by H. Rackham'
    },
    {
        title: 'Article 4',
        shortDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
        detailTitle: '1914 translation by H. Rackham',
        subTitle: 'Written by Cicero in 45 BC',
        longDesc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem',
        imageUrl: 'assets/banner.gif',
        imageTitle: '1914 translation by H. Rackham'
    }
];


$(function () {
   createSidebar();
   createArticleItems();
   $('.sidebar-item-container').click((e) => {
    console.log('Sidebar item clicked');
    $('.sidebar-item-container').removeClass('sidebar-item-container-active');
    $(e.currentTarget).addClass('sidebar-item-container-active');
   });

   $('.article-item').click((e) => {
    console.log('Article Item clicked');
    $('.article-item').removeClass('article-item-active');
    $(e.currentTarget).addClass('article-item-active');
   });

   $('.message-box').keypress((e) => {
    if (e.which === 13) {
      const txt = $(".message-box").val();
      if (!txt || txt.trim().length === 0) {
          return;
      }
      $('.result').html('Request in progress..');
      // Ideally, a POST Call is to be made. Since I do not have the APIs, I went ahead with a GET Call
      $.get( "https://support.oneskyapp.com/hc/en-us/article_attachments/202761627/example_1.json", function( data ) {
        $('.result').html('Response:' + JSON.stringify(data));
      });
      e.preventDefault();
    }
  });
});

function createSidebar() {
    let sidebarItems = [];
    for (let i = 0; i < menuList.length; i++) {
        const elemStr = `<div class="sidebar-item-container"><div class="sidebar-item"></div><div class="sidebar-item-text">${menuList[i]}</div></div>`;
        const elem = $(elemStr);
        sidebarItems.push(elem);
    }
    $('.sidebar').append(sidebarItems);
}

function createArticleItems() {
    let articleItems = [];
    for (let i = 0; i < articlesList.length; i++) {
        const obj = articlesList[i];
        const elemStr = ` <div class="article-item"><div class="article-item-heading">${obj.title}</div><div class="article-item-desc">${obj.shortDesc}</div></div>`;
        const elem = $(elemStr);
        articleItems.push(elem);
    }
    $('.articles-list').append(articleItems);
}

function sidebarItem_clickHandler() {

}

function articleList_itemClickHandler() {

}

function btnMessage_clickHandler() {

}