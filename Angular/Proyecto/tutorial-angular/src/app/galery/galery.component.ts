import { Component } from '@angular/core';

@Component({
  selector: 'app-galery',
  standalone: true,
  imports: [],
  template: `
    @for (photo of photos; track $index) {
      @for (photo of photos; track $index) {
        <p>{{photo.url}}</p>
      }
    }
    @defer(on viewport){
    <div>
      @for (photo of photos; track $index) {
      <img src="{{photo.url}}" alt="">
    }
  </div>
}@placeholder{
<div>
  Ocupando el espacio
</div>
} @loading (minimum 3s){
  <div>Cargando componentes</div>
}
  `,
  styles: `
  img{
    margin: 0 auto;
    width: 500px;
  }
  div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  `
})
export class GaleryComponent {
  photos = [
    {
      url: "https://i.pinimg.com/originals/7a/e5/58/7ae558fdccc2ee5f12bb6921e751f929.jpg"
    },
    {
      url: "https://w0.peakpx.com/wallpaper/31/436/HD-wallpaper-dark-souls-dark-souls-iii-fire-keeper-dark-souls.jpg"
    },
    {
      url: "https://images8.alphacoders.com/103/thumb-1920-1033671.jpg"
    },
    {
      url: "https://gameranx.com/wp-content/uploads/2018/08/Sekiro-Shadows-Die-Twice-1080P-Wallpaper-1.jpg"
    },
    {
      url: "https://preview.redd.it/rarhriz97ni81.png?width=640&crop=smart&auto=webp&s=b0dfc4969d004dbe7efd7a0d0ba5a08b75fdc04f"
    },
    {
      url: "https://steamuserimages-a.akamaihd.net/ugc/2058741034012525685/D0FBE13833A04573BA78B1584C510EFC5CED0DEF/"
    },
  ]

}
