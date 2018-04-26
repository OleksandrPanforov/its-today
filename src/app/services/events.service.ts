import { Injectable, Inject } from '@angular/core';

import { DevApiPath } from '../dependencyInjection/tokens';
import { Event } from '../models/event';
import { EventsResponse } from '../models/eventsResponse';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable()
export class EventsService {
  constructor(private http: HttpClient) {}

  private apiPath = 'https://48tof4n3u3.execute-api.us-east-2.amazonaws.com/dev/';

  public getAllEvents(): Event[] {
    return [{
                'year': '404 BC',
                'text': 'Peloponnesian War: Lysander\'s Spartan armies defeated the Athenians and the war ends.',
                'html': '<a href="https://wikipedia.org/wiki/Peloponnesian_War" title="Peloponnesian War">Peloponnesian War</a>: <a href="https://wikipedia.org/wiki/Lysander" title="Lysander">Lysander</a>\'s <a href="https://wikipedia.org/wiki/Sparta" title="Sparta">Spartan</a> armies defeated the <a href="https://wikipedia.org/wiki/Classical_Athens" title="Classical Athens">Athenians</a> and the war ends.',
                'links': [
                    {
                        'title': 'Peloponnesian War',
                        'link': 'https://wikipedia.org/wiki/Peloponnesian_War'
                    },
                    {
                        'title': 'Lysander',
                        'link': 'https://wikipedia.org/wiki/Lysander'
                    },
                    {
                        'title': 'Sparta',
                        'link': 'https://wikipedia.org/wiki/Sparta'
                    },
                    {
                        'title': 'Classical Athens',
                        'link': 'https://wikipedia.org/wiki/Classical_Athens'
                    }
                ]
            },
            {
                'year': '775',
                'text': 'The Battle of Bagrevand puts an end to an Armenian rebellion against the Abbasid Caliphate. Muslim control over Transcaucasia is solidified and its Islamization begins, while several major Armenian nakharar families lose power and their remnants flee to the Byzantine Empire.',
                'html': 'The <a href="https://wikipedia.org/wiki/Battle_of_Bagrevand" title="Battle of Bagrevand">Battle of Bagrevand</a> puts an end to an <a href="https://wikipedia.org/wiki/Armenians" title="Armenians">Armenian</a> rebellion against the <a href="https://wikipedia.org/wiki/Abbasid_Caliphate" title="Abbasid Caliphate">Abbasid Caliphate</a>. Muslim control over <a href="https://wikipedia.org/wiki/Transcaucasia" title="Transcaucasia">Transcaucasia</a> is solidified and its Islamization begins, while several major Armenian <i><a href="https://wikipedia.org/wiki/Nakharar" title="Nakharar">nakharar</a></i> families lose power and their remnants flee to the <a href="https://wikipedia.org/wiki/Byzantine_Empire" title="Byzantine Empire">Byzantine Empire</a>.',
                'links': [
                    {
                        'title': 'Battle of Bagrevand',
                        'link': 'https://wikipedia.org/wiki/Battle_of_Bagrevand'
                    },
                    {
                        'title': 'Armenians',
                        'link': 'https://wikipedia.org/wiki/Armenians'
                    },
                    {
                        'title': 'Abbasid Caliphate',
                        'link': 'https://wikipedia.org/wiki/Abbasid_Caliphate'
                    },
                    {
                        'title': 'Transcaucasia',
                        'link': 'https://wikipedia.org/wiki/Transcaucasia'
                    },
                    {
                        'title': 'Nakharar',
                        'link': 'https://wikipedia.org/wiki/Nakharar'
                    },
                    {
                        'title': 'Byzantine Empire',
                        'link': 'https://wikipedia.org/wiki/Byzantine_Empire'
                    }
                ]
            },
            {
                'year': '799',
                'text': 'After mistreatment and disfigurement by the citizens of Rome, pope Leo III flees to the Frankish court of king Charlemagne at Paderborn for protection.',
                'html': 'After mistreatment and <a href="https://wikipedia.org/wiki/Disfigurement" title="Disfigurement">disfigurement</a> by the citizens of Rome, pope <a href="https://wikipedia.org/wiki/Pope_Leo_III" title="Pope Leo III">Leo III</a> flees to the <a href="https://wikipedia.org/wiki/Francia" title="Francia">Frankish</a> court of king <a href="https://wikipedia.org/wiki/Charlemagne" title="Charlemagne">Charlemagne</a> at <a href="https://wikipedia.org/wiki/Paderborn" title="Paderborn">Paderborn</a> for protection.',
                'links': [
                    {
                        'title': 'Disfigurement',
                        'link': 'https://wikipedia.org/wiki/Disfigurement'
                    },
                    {
                        'title': 'Pope Leo III',
                        'link': 'https://wikipedia.org/wiki/Pope_Leo_III'
                    },
                    {
                        'title': 'Francia',
                        'link': 'https://wikipedia.org/wiki/Francia'
                    },
                    {
                        'title': 'Charlemagne',
                        'link': 'https://wikipedia.org/wiki/Charlemagne'
                    },
                    {
                        'title': 'Paderborn',
                        'link': 'https://wikipedia.org/wiki/Paderborn'
                    }
                ]
            }];
  }
}
