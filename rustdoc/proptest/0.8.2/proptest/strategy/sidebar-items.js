initSidebarItems({"fn":[["check_strategy_sanity","Run some tests on the given `Strategy` to ensure that it upholds the simplify/complicate contracts."],["float_to_weight","Convert a floating-point weight in the range (0.0,1.0) to a pair of weights that can be used with `Union` and similar."]],"mod":[["statics","Modified versions of the normal strategy combinators which take specialised traits instead of normal functions."]],"struct":[["BoxedStrategy","A boxed `Strategy` trait object as produced by `Strategy::boxed()`."],["CheckStrategySanityOptions","Options passed to `check_strategy_sanity()`."],["Filter","`Strategy` and `ValueTree` filter adaptor."],["FilterMap","`Strategy` and `ValueTree` filter_map adaptor."],["FilterMapValueTree","`ValueTree` corresponding to `FilterMap`."],["Flatten","Adaptor that flattens a `Strategy` which produces other `Strategy`s into a `Strategy` that picks one of those strategies and then picks values from it."],["FlattenValueTree","The `ValueTree` produced by `Flatten`."],["Fuse","Adaptor for `Strategy` and `ValueTree` which guards `simplify()` and `complicate()` to avoid contract violations."],["IndFlatten","Similar to `Flatten`, but does not shrink the input strategy."],["IndFlattenMap","Similar to `Map` plus `Flatten`, but does not shrink the input strategy and passes the original input through."],["Just","A `Strategy` which always produces a single value value and never simplifies."],["LazyJust","A `Strategy` which always produces a single value value and never simplifies. If `T` is `Clone`, you should use `Just` instead."],["Map","`Strategy` and `ValueTree` map adaptor."],["MapInto","`Strategy` and `ValueTree` map into adaptor."],["NoShrink","Wraps a `Strategy` or `ValueTree` to suppress shrinking of generated values."],["Perturb","`Strategy` perturbation adaptor."],["PerturbValueTree","`ValueTree` perturbation adaptor."],["Recursive","Return type from `Strategy::prop_recursive()`."],["SBoxedStrategy","A boxed `Strategy` trait object which is also `Sync` and `Send`, as produced by `Strategy::sboxed()`."],["Shuffle","`Strategy` shuffle adaptor."],["ShuffleValueTree","`ValueTree` shuffling adaptor."],["TupleUnion","Similar to `Union`, but internally uses a tuple to hold the strategies."],["TupleUnionValueTree","`ValueTree` type produced by `TupleUnion`."],["Union","A `Strategy` which picks from one of several delegate `Stragegy`s."],["UnionValueTree","`ValueTree` corresponding to `Union`."]],"trait":[["Shuffleable","A value which can be used with the `prop_shuffle` combinator."],["Strategy","A strategy for producing arbitrary values of a given type."],["ValueTree","A generated value and its associated shrinker."]],"type":[["LazyJustFn","Shorthand for `LazyJust<T, fn () -> T>`."],["NewTree","A new [`ValueTree`] from a [`Strategy`] when [`Ok`] or otherwise [`Err`] when a new value-tree can not be produced for some reason such as in the case of filtering with a predicate which always returns false. You should pass in your strategy as the type parameter."],["ValueFor","The value that functions under test use for a particular `Strategy`."],["W","A relative `weight` of a particular `Strategy` corresponding to `T` coupled with `T` itself. The weight is currently given in `u32`."]]});