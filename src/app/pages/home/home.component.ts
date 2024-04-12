import { Component, OnInit } from '@angular/core';
import { MenuTitleComponent } from '../../components/menu-title/menu-title.component';
import { BigCardComponent } from '../../components/big-card/big-card.component';
import { SmallCardComponent } from '../../components/small-card/small-card.component';
import { MenuBarComponent } from '../../components/menu-bar/menu-bar.component';
import { dataFake, IArticle } from '../../data/dataFake';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MenuTitleComponent,
    BigCardComponent,
    SmallCardComponent,
    MenuBarComponent,
    CommonModule 
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', './home.responsive.component.css'],
})

export class HomeComponent implements OnInit {
  mainArticle:IArticle = {
    'id': '0',
    'type': 'main',
    'photoCover': '',
    'title': '',
    'description': '',
  };
  articles:IArticle[] = dataFake;

  ngOnInit() {
    this.mainArticle = dataFake.map(article => {
      article.title = article.title.toLocaleUpperCase();

      return article;
    }).filter(article => article.type === "main")[0];
    this.articles = dataFake.filter((article) => article.type === "other" );
  }
}
