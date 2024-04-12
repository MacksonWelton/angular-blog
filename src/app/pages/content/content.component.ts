import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { dataFake } from '../../data/dataFake';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css', './content.responsive.component.css'],
})
export class ContentComponent implements OnInit {
  photoCover: string = '';
  contentTitle: string = '';
  contentDescription: SafeHtml = '';
  private id: string | null = '0';

  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((value) => {
      this.id = value.get('id');
      this.setValuesToComponent(this.id);
    });
  }

  setValuesToComponent(id: string | null) {
    const result = dataFake.filter((article) => article.id === id)[0];

    this.photoCover = result.photoCover;
    this.contentTitle = result.title;
    this.contentDescription = this.sanitizer.bypassSecurityTrustHtml(result.description);
  }
}
