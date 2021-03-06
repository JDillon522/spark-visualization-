import { Action, Store } from '@ngrx/store';
import { Router, ActivatedRoute } from '@angular/router';
import { Actions, Effect } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as fromRoot from '../application-state';
import * as TagActions from '../actions/tag.actions';
import * as DetailsActions from '../actions/details.actions';
import * as _ from 'lodash';
import { TimeseriesService } from '../../../services/timeseries/timeseries.service';
import { Tag } from '../../models/tag';
import * as moment from 'moment';
import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/operator/mergeMap';

@Injectable()
export class TagEffects {
    constructor(
        private actions$: Actions,
        private store: Store<fromRoot.State>,
        private timeseriesService: TimeseriesService,
        private router: Router
    ) {}

    @Effect() getTags$: Observable<Action> = this.actions$
        .ofType(TagActions.GET_TAGS)
        .concatMap((action) => {
            return this.timeseriesService.getTags().mergeMap((response: Tag[]) => {
                const actions = new Set();

                actions.add(new TagActions.GetTagsSuccess(response));
                actions.add(new TagActions.SelectTag(response[0]));
                return Array.from(actions);
            });
        });

    @Effect() selectTag$: Observable<Action> = this.actions$
        .ofType(TagActions.SELECT_TAG)
        .withLatestFrom(this.store)
        .concatMap(([action, state]) => {
            const actions = new Set();
            const start = moment().subtract(2, 'd').format('YYYY-MM-DD');
            const end = moment().format('YYYY-MM-DD');
            const tag: Tag = action['payload'] ? action['payload'] : state.tags.selected;

            actions.add(new DetailsActions.GetDetails(tag.tagId, start, end));
            if (action['redirect']) {
                this.router.navigate(['details', tag.tagId]);
            }

            return Array.from(actions);
        });
}
