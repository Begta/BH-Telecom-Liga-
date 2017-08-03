import { Component } from '@angular/core';

@Component({
    selector: 'tb-clubs',
    templateUrl: 'app/clubs/clubs.component.html'
})
export class ClubsComponent {
    pageTitle: string = 'Spisak klubova učesnika BH Telecom Premier Lige 2017/2018'
    imageWidth: number = 50;
    imageMargin: number =2;
    clubs: any []  = [
        {
            "id": 1,
            "name": "Fudbalski Klub Sloboda Tuzla",
            "nickName": "Crveno-crni",
            "founded": 1919,
            "stadium": "Stadion Tušanj",
            "stadiumCapacity": 15000,
            "coach": "Vlado Jagodić",
            "league": "Premier League BiH",
            "imageUrl": "app/assets/images/FK_Sloboda_Tuzla_logo.png"
        },
        {
            "id": 2,
            "name": "Nogometni Klub Široki Brijeg",
            "nickName": "Plavi",
            "founded": 1948,
            "stadium": "Stadion Pecara",
            "stadiumCapacity": 5628,
            "coach": "Zlatan Mijo Jelić",
            "league": "Premier League BiH",
            "imageUrl": "app/assets/images/FK_Široki_Brijeg_logo.png"
        },
        {
            "id": 3,
            "name": "Fudbalski Klub Borac Banja Luka",
            "nickName": "Crveno-plavi",
            "founded": 1926,
            "stadium": "Gradski stadion",
            "stadiumCapacity": 9730,
            "coach": "Željko Vranješ",
            "league": "Premier League BiH",
            "imageUrl": "app/assets/images/FK_Borac_Banja_Luka_logo.png"
        },
        {
            "id": 4,
            "name": "Gabeoski Omladinski Športski Klub",
            "nickName": "Plavi lavovi",
            "founded": 1919,
            "stadium": "Stadion Pero Pavlović",
            "stadiumCapacity": 3000,
            "coach": "Darko Vojvodić",
            "league": "Premier League BiH",
            "imageUrl": "app/assets/images/FK_Gošk_Gabela_logo.gif"
        },
        {
            "id": 5,
            "name": "Fudbalski Klub Krupa na Vrbasu",
            "nickName": "Krupa",
            "founded": 1983,
            "stadium": "Stadion Krupa na Vrbasu",
            "stadiumCapacity": 3000,
            "coach": "Slobodan Starčević",
            "league": "Premier League BiH",
            "imageUrl": "app/assets/images/FK_Krupa_logo.png"
        },
        {
            "id": 6,
            "name": "Fudbalski Klub Mladost Doboj Kakanj",
            "nickName": "Crvena Legija",
            "founded": 1959,
            "stadium": "Stadion MGM Farm Arena",
            "stadiumCapacity": 3000,
            "coach": "Edis Mulalić",
            "league": "Premier League BiH",
            "imageUrl": "app/assets/images/FK_Mladost_Doboj_Kakanj_logo.png"
        },
        {
            "id": 7,
            "name": "Fudbalski Klub Radnik Bijeljina",
            "nickName": "Plavo-bijeli",
            "founded": 1945,
            "stadium": "Gradski Stadion Bijeljina",
            "stadiumCapacity": 6000,
            "coach": "Mladen Žižović",
            "league": "Premier League BiH",
            "imageUrl": "app/assets/images/FK_Radnik_Bijeljina_logo.png"
        },
            {
            "id": 8,
            "name": "Fudbalski Klub Sarajevo",
            "nickName": "Bordo-bijeli",
            "founded": 1946,
            "stadium": "Stadion Asim Ferhatović Hase",
            "stadiumCapacity": 34500,
            "coach": "Senad Repuh",
            "league": "Premier League BiH",
            "imageUrl": "app/assets/images/FK_Sarajevo_logo.png"
        },
        {
            "id": 9,
            "name": "Nogometni Klub Vitez",
            "nickName": "Vitezovi",
            "founded": 1947,
            "stadium": "Gradski Stadion Vitez",
            "stadiumCapacity": 3000,
            "coach": "Slaven Musa",
            "league": "Premier League BiH",
            "imageUrl": "app/assets/images/FK_Vitez_logo.png"
        },
        {
            "id": 10,
            "name": "Fudbalski Klub Željezničar",
            "nickName": "Željo",
            "founded": 1921,
            "stadium": "Stadion Grbavica",
            "stadiumCapacity": 17000,
            "coach": "Admir Adžem",
            "league": "Premier League BiH",
            "imageUrl": "app/assets/images/FK_Željezničar_logo.png"
        },
        {
            "id": 11,
            "name": "Hrvatski Športski Klub Zrinjski Mostar",
            "nickName": "Plemići",
            "founded": 1905,
            "stadium": "Stadion HŠK Zrinjski Mostar",
            "stadiumCapacity": 25000,
            "coach": "Blaž Slišković",
            "league": "Premier League BiH",
            "imageUrl": "app/assets/images/FK_Zrinjski_logo.png"
        },
        {
            "id": 12,
            "name": "Nogometni Klub Čelik Zenica",
            "nickName": "Crno-crveni",
            "founded": 1945,
            "stadium": "Stadion Bilino Polje",
            "stadiumCapacity": 15600,
            "coach": "Kemal Hafizović",
            "league": "Premier League BiH",
            "imageUrl": "app/assets/images/FK_Čelik_logo.png"
        }
    ]
}