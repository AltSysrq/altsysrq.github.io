var searchIndex = {};
searchIndex["supercow"] = {"doc":"`Supercow` is `Cow` on steroids.","items":[[3,"Supercow","supercow","The actual generic reference type.",null,null],[3,"Ref","","Provides mutable access to an owned value within a `Supercow`.",null,null],[0,"ext","","Miscelaneous things used to integrate other code with Supercow, but which\nare not of interest to most client developers.",null,null],[3,"TwoStepRc","supercow::ext","Wrapper providing a `TwoStepShared` implementation.",null,null],[3,"TwoStepArc","","Wrapper providing a `TwoStepShared` implementation.",null,null],[3,"InlineStorage","","Causes the `OWNED` or `SHARED` value of a `Supercow` to be stored inline.",null,null],[3,"BoxedStorage","","Causes the `OWNED` or `SHARED` value of a `Supercow` to be stored in a\n`Box`.",null,null],[17,"MAX_INTERNAL_BORROW_DISPLACEMENT","","The maximum displacement (relative to the start of the object) that a\nreference pointing into `self` from an instance of `SafeBorrow` may have.",null,null],[8,"ConstDeref","","Marker trait indicating a `Deref`-like which always returns the same\nreference.",null,null],[16,"Target","","The type this value dereferences to.",0,null],[10,"const_deref","","Returns the (constant) value that this value dereferences to.",0,null],[8,"TwoStepShared","","Trait for `ConstDeref` implementations which can be constructed in a\ntwo-step process.",null,null],[10,"new_two_step","","Returns a new, empty instance of `Self`.",1,{"inputs":[],"output":{"name":"self"}}],[10,"deref_holder","","Returns the internal `Option&lt;T&gt;` backing this value.",1,null],[8,"SafeBorrow","","Extension of `Borrow` used to allow `Supercow::to_mut()` to work safely.",null,null],[10,"borrow_replacement","","Given `ptr`, which was obtained from a prior call to `Self::borrow()`,\nreturn a value with the same nominal lifetime which is guaranteed to\nsurvive mutations to `Self`.",2,{"inputs":[{"name":"t"}],"output":{"name":"t"}}],[8,"PointerFirstRef","","Marker trait identifying a reference type which begins with an absolute\naddress and contains no other address-dependent information.",null,null],[8,"SharedFrom","","Like `std::convert::From`, but without the blanket implementations that\ncause problems for `supercow_features!`.",null,null],[10,"shared_from","","Converts the given `T` to `Self`.",3,{"inputs":[{"name":"t"}],"output":{"name":"self"}}],[8,"OwnedStorage","","Describes how an `OWNED` or `SHARED` value is stored in a `Supercow`.",null,null],[10,"allocate_a","","Allocates the given owned value.",4,null],[10,"allocate_b","","See `allocate_a`.",4,null],[10,"get_ptr_a","","Extracts the immutable reference from the saved pointer and storage.",4,null],[10,"get_ptr_b","","See `get_ptr_a`.",4,null],[10,"get_mut_a","","Extracts the mutable reference from the saved pointer and storage.",4,null],[10,"get_mut_b","","See `get_mut_a`.",4,null],[10,"deallocate_a","","Releases any allocations that would not be released by `Stored`\nbeing dropped.",4,null],[10,"deallocate_b","","See `deallocate_b`.",4,null],[10,"deallocate_into_a","","Like `deallocate_a()`, but also return the owned value.",4,null],[10,"deallocate_into_b","","See `deallocate_into_a`.",4,null],[10,"is_internal_storage","","Returns whether this storage implementation ever causes the owned\nobject to be stored internally to the `Supercow`.",4,{"inputs":[],"output":{"name":"bool"}}],[8,"PtrWrite","","Optionally stores a pointer to a value.",null,null],[10,"new","","Returns an instance of `Self` with no particular value.",5,{"inputs":[],"output":{"name":"self"}}],[10,"store_ptr","","Writes the given reference into `self`.",5,null],[8,"PtrRead","","Read trait corresponding to `PtrWrite`.",null,null],[10,"get_ptr","","Returns the pointer most recently stored via `store_ptr()`.",6,null],[11,"clone","","",7,null],[11,"new_two_step","","",7,{"inputs":[],"output":{"name":"self"}}],[11,"deref_holder","","",7,null],[11,"clone","","",8,null],[11,"new_two_step","","",8,{"inputs":[],"output":{"name":"self"}}],[11,"deref_holder","","",8,null],[11,"clone","","",9,null],[11,"fmt","","",9,null],[11,"default","","",9,{"inputs":[],"output":{"name":"self"}}],[11,"allocate_a","","",9,null],[11,"allocate_b","","",9,null],[11,"get_ptr_a","","",9,null],[11,"get_ptr_b","","",9,null],[11,"get_mut_a","","",9,null],[11,"get_mut_b","","",9,null],[11,"deallocate_a","","",9,null],[11,"deallocate_b","","",9,null],[11,"deallocate_into_a","","",9,null],[11,"deallocate_into_b","","",9,null],[11,"is_internal_storage","","",9,{"inputs":[],"output":{"name":"bool"}}],[11,"fmt","","",10,null],[11,"clone","","",10,null],[11,"default","","",10,{"inputs":[],"output":{"name":"boxedstorage"}}],[11,"allocate_a","","",10,null],[11,"allocate_b","","",10,null],[11,"get_ptr_a","","",10,null],[11,"get_ptr_b","","",10,null],[11,"get_mut_a","","",10,null],[11,"get_mut_b","","",10,null],[11,"deallocate_a","","",10,null],[11,"deallocate_b","","",10,null],[11,"deallocate_into_a","","",10,null],[11,"deallocate_into_b","","",10,null],[11,"is_internal_storage","","",10,{"inputs":[],"output":{"name":"bool"}}],[6,"NonSyncSupercow","supercow","`Supercow` with the default `SHARED` changed to `NonSyncFeatures`, enabling\nthe use of `Rc` as a shared reference type as well as making it possible to\nuse non-`Send` or non-`Sync` `BORROWED` types easily.",null,null],[6,"InlineSupercow","","`Supercow` with the default `STORAGE` changed to `InlineStorage`.",null,null],[6,"InlineNonSyncSupercow","","`NonSyncSupercow` with the `STORAGE` changed to `InlineStorage`.",null,null],[6,"Phantomcow","","`Phantomcow&lt;&#39;a, Type&gt;` is to `Supercow&lt;&#39;a, Type&gt;` as\n`PhantomData&lt;&amp;&#39;a Type&gt;` is to `&amp;&#39;a Type`.",null,null],[6,"NonSyncPhantomcow","","The `Phantomcow` variant corresponding to `NonSyncSupercow`.",null,null],[6,"InlinePhantomcow","","The `Phantomcow` variant corresponding to `InlineStorage`.",null,null],[6,"InlineNonSyncPhantomcow","","The `Phantomcow` variant corresponding to `InlineNonSyncSupercow`.",null,null],[8,"DefaultFeatures","","The default shared reference type for `Supercow`.",null,null],[10,"clone_boxed","","Clone this value, and then immediately put it into a `Box`\nbehind a trait object of this trait.",11,null],[10,"self_address_mut","","Returns the address of `self`.",11,null],[8,"NonSyncFeatures","","The shared reference type for `NonSyncSupercow`.",null,null],[10,"clone_boxed","","Clone this value, and then immediately put it into a `Box`\nbehind a trait object of this trait.",12,null],[10,"self_address_mut","","Returns the address of `self`.",12,null],[11,"drop","","",13,null],[11,"owned","","Creates a new `Supercow` which owns the given value.",13,{"inputs":[{"name":"owned"}],"output":{"name":"self"}}],[11,"borrowed","","Creates a new `Supercow` which borrows the given value.",13,{"inputs":[{"name":"t"}],"output":{"name":"self"}}],[11,"shared","","Creates a new `Supercow` using the given shared reference.",13,{"inputs":[{"name":"t"}],"output":{"name":"self"}}],[11,"clone_non_owned","","If `this` is non-owned, clone `this` and return it.",13,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"share","","Logically clone `this` without needing to clone `OWNED`.",13,{"inputs":[{"name":"self"}],"output":{"name":"self"}}],[11,"extract_ref","","If `this` is borrowed, return the underlying reference with the\noriginal lifetime. Otherwise, return `None`.",13,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"into_inner","","Takes ownership of the underling value if needed, then returns it,\nconsuming `self`.",13,{"inputs":[{"name":"self"}],"output":{"name":"owned"}}],[11,"to_mut","","Returns a (indirect) mutable reference to an underlying owned value.",13,null],[11,"take_ownership","","Takes ownership of the underlying value, so that this `Supercow` has a\n`&#39;static` lifetime.",13,{"inputs":[{"name":"self"}],"output":{"name":"supercow"}}],[11,"phantom","","Converts this `Supercow` into a `Phantomcow`.",13,{"inputs":[{"name":"self"}],"output":{"name":"phantomcow"}}],[11,"deref","","",14,null],[11,"deref_mut","","",14,null],[11,"drop","","",14,null],[11,"deref","","",13,null],[11,"borrow","","",13,null],[11,"as_ref","","",13,null],[11,"clone","","",13,null],[11,"from","","",13,{"inputs":[{"name":"owned"}],"output":{"name":"self"}}],[11,"from","","",13,{"inputs":[{"name":"owned"}],"output":{"name":"self"}}],[11,"from","","",13,{"inputs":[{"name":"rc"}],"output":{"name":"self"}}],[11,"from","","",13,{"inputs":[{"name":"arc"}],"output":{"name":"self"}}],[11,"fmt","","",13,null],[11,"fmt","","",13,null],[11,"fmt","","",13,null],[11,"fmt","","",13,null],[11,"fmt","","",13,null],[11,"fmt","","",13,null],[11,"fmt","","",13,null],[11,"fmt","","",13,null],[11,"fmt","","",13,null],[11,"fmt","","",13,null],[11,"eq","","",13,null],[11,"ne","","",13,null],[11,"partial_cmp","","",13,null],[11,"lt","","",13,null],[11,"le","","",13,null],[11,"gt","","",13,null],[11,"ge","","",13,null],[11,"cmp","","",13,null],[11,"hash","","",13,null],[14,"supercow_features","","Defines a &quot;feature set&quot; for a custom `Supercow` type.",null,null]],"paths":[[8,"ConstDeref"],[8,"TwoStepShared"],[8,"SafeBorrow"],[8,"SharedFrom"],[8,"OwnedStorage"],[8,"PtrWrite"],[8,"PtrRead"],[3,"TwoStepRc"],[3,"TwoStepArc"],[3,"InlineStorage"],[3,"BoxedStorage"],[8,"DefaultFeatures"],[8,"NonSyncFeatures"],[3,"Supercow"],[3,"Ref"]]};
initSearch(searchIndex);
