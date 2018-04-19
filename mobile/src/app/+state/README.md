# AppState



* Generate State Module
`ng g module +state/AppState --flat=true -m app.module.ts`

* Generate root Store: https://github.com/ngrx/platform/blob/master/docs/schematics/store.md
`ng g st State -m +state/app-state.module.ts --statePath +state --root `

* Generate entities: https://github.com/ngrx/platform/blob/master/docs/schematics/entity.md
`ng g entity +state/CollectionSchedule --flat=false -m +state/app-state.module.ts -r index.ts`
