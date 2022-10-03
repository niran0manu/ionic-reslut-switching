import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.page.html',
  styleUrls: ['./results.page.scss'],
})
export class ResultsPage implements OnInit {
  selectedSegments: { [key: number]: string } = {};

  constructor() {}

  cc = [
    {
      id: 1,
      image:
        'https://cdn.pixabay.com/photo/2016/08/11/23/48/mountains-1587287_960_720.jpg',
      title: 'Oletko muuttamassa?',
      content:
        'Kokeile naapurustojen hakukonetta ja löydä omiin tarpeisiisi paras paikka asua Lounais-Suomessa.',
      buttonData: 'Etsi naapurustoja',
      map: 'https://media.istockphoto.com/vectors/city-urban-streets-roads-abstract-map-vector-id1137117479?k=20&m=1137117479&s=612x612&w=0&h=56n_1vX4IdhkyNZ0Xj6NfSPA0jZSwf6Ru2K68udk4H4=',
    },
    {
      id: 2,
      image:
        'https://cdn.pixabay.com/photo/2018/11/24/01/35/christmas-motif-3834860_960_720.jpg',
      title: 'Asutko seudulla?',
      content:
        'Kirjaudu palveluun ja arvioi asuinpaikkasi. Arviosi auttaa muuttajia löytämään sopivimman paikan asua.',
      buttonData: 'Arvioi asuinpaikkasi',
      map: 'https://media.istockphoto.com/vectors/city-urban-streets-roads-abstract-map-vector-id1137117479?k=20&m=1137117479&s=612x612&w=0&h=56n_1vX4IdhkyNZ0Xj6NfSPA0jZSwf6Ru2K68udk4H4=',
    },
    {
      id: 3,
      image:
        'https://cdn.pixabay.com/photo/2013/11/13/21/14/san-francisco-210230_960_720.jpg',
      title: 'Kesäretkihaaste 2022',
      content:
        'Tutustu Lounais-Suomen kiinnostavimpiin retkikohteisiin ja lähde seikkailulle ajalla 15.6.-31.8.2022',
      buttonData: 'Tule mukaan!',
      map: 'https://media.istockphoto.com/vectors/city-urban-streets-roads-abstract-map-vector-id1137117479?k=20&m=1137117479&s=612x612&w=0&h=56n_1vX4IdhkyNZ0Xj6NfSPA0jZSwf6Ru2K68udk4H4=',
    },
    {
      id: 4,
      image:
        'https://cdn.pixabay.com/photo/2015/07/11/22/57/city-841408_960_720.jpg',
      title: 'Oletko muuttamassa?',
      content:
        'Kokeile naapurustojen hakukonetta ja löydä omiin tarpeisiisi paras paikka asua Lounais-Suomessa.',
      buttonData: 'Etsi naapurustoja',
      map: 'https://media.istockphoto.com/vectors/city-urban-streets-roads-abstract-map-vector-id1137117479?k=20&m=1137117479&s=612x612&w=0&h=56n_1vX4IdhkyNZ0Xj6NfSPA0jZSwf6Ru2K68udk4H4=',
    },
    {
      id: 5,
      image:
        'https://cdn.pixabay.com/photo/2013/05/28/20/30/canal-114290_960_720.jpg',
      title: 'Asutko seudulla?',
      content:
        'Kirjaudu palveluun ja arvioi asuinpaikkasi. Arviosi auttaa muuttajia löytämään sopivimman paikan asua.',
      buttonData: 'Arvioi asuinpaikkasi',
      map: 'https://media.istockphoto.com/vectors/city-urban-streets-roads-abstract-map-vector-id1137117479?k=20&m=1137117479&s=612x612&w=0&h=56n_1vX4IdhkyNZ0Xj6NfSPA0jZSwf6Ru2K68udk4H4=',
    },
    {
      id: 6,
      image:
        'https://cdn.pixabay.com/photo/2013/11/13/21/14/san-francisco-210230_960_720.jpg',
      title: 'Kesäretkihaaste 2022',
      content:
        'Tutustu Lounais-Suomen kiinnostavimpiin retkikohteisiin ja lähde seikkailulle ajalla 15.6.-31.8.2022',
      buttonData: 'Tule mukaan!',
      map: 'https://media.istockphoto.com/vectors/city-urban-streets-roads-abstract-map-vector-id1137117479?k=20&m=1137117479&s=612x612&w=0&h=56n_1vX4IdhkyNZ0Xj6NfSPA0jZSwf6Ru2K68udk4H4=',
    },
  ];

  segmentChanged(event, id: number) {
    this.selectedSegments[id] = event.currentTarget.value;
    console.log(this.selectedSegments);
  }
  ngOnInit() {}
}
