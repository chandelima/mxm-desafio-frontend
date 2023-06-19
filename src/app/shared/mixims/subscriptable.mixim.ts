import { OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { Constructor } from 'src/app/shared/mixims/constructor.mixim';

export interface Subscriptable {
  addSubscription(subscription: Subscription): void;
  addSubscriptions(subscriptions: Subscription[]): void;
  cleanSubscriptions(): void;
}

export function subscriptable<T extends Constructor>(base: T)
  : Constructor<Subscriptable> & T {
  return class extends base implements OnDestroy {
    private subscriptions: Subscription[] = [];

    addSubscription(subscription: Subscription): void {
      this.subscriptions.push(subscription);
    }

    addSubscriptions(subscriptions: Subscription[]): void {
      subscriptions.forEach(s => { this.subscriptions.push(s); });
    }

    cleanSubscriptions(): void {
      this.subscriptions.forEach(s => s.unsubscribe());
    }

    ngOnDestroy(): void {
      this.cleanSubscriptions();
    }
  }
}
