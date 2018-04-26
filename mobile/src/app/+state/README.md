# AppState

## Root State

Root state is housed in the app/+state folder

* Generate root Store: https://github.com/ngrx/platform/blob/master/docs/schematics/store.md
`ng g st State -m app.module.ts --statePath +state --root`

* Generate root Effects
`ng g effect +state/App --root --m app.module.ts`

# Feature State

Feature state is housed under the respecitce 

* Generate entities: https://github.com/ngrx/platform/blob/master/docs/schematics/entity.md
`ng g entity modules/collection-schedule/+state/CollectionSchedule -m modules/collection-schedule/collection-schedule.module.ts -r ../../../+state/index.ts`
