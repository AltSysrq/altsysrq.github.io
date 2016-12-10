initSidebarItems({"macro":[["supercow_features","Defines a \"feature set\" for a custom `Supercow` type."]],"mod":[["ext","Miscelaneous things used to integrate other code with Supercow, but which are not of interest to most client developers."]],"struct":[["Ref","Provides mutable access to an owned value within a `Supercow`."],["Supercow","The actual generic reference type."]],"trait":[["DefaultFeatures","The default shared reference type for `Supercow`."],["NonSyncFeatures","The shared reference type for `NonSyncSupercow`."]],"type":[["InlineNonSyncPhantomcow","The `Phantomcow` variant corresponding to `InlineNonSyncSupercow`."],["InlineNonSyncSupercow","`NonSyncSupercow` with the `STORAGE` changed to `InlineStorage`."],["InlinePhantomcow","The `Phantomcow` variant corresponding to `InlineStorage`."],["InlineSupercow","`Supercow` with the default `STORAGE` changed to `InlineStorage`."],["NonSyncPhantomcow","The `Phantomcow` variant corresponding to `NonSyncSupercow`."],["NonSyncSupercow","`Supercow` with the default `SHARED` changed to `NonSyncFeatures`, enabling the use of `Rc` as a shared reference type as well as making it possible to use non-`Send` or non-`Sync` `BORROWED` types easily."],["Phantomcow","`Phantomcow<'a, Type>` is to `Supercow<'a, Type>` as `PhantomData<&'a Type>` is to `&'a Type`."]]});