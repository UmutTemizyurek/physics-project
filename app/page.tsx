import { ArrowDown, Zap, TrendingUp, Clock, Users, Leaf, CheckCircle2, XCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function PhysicsProject() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-primary text-primary-foreground py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <Badge className="mb-6 bg-accent text-accent-foreground">SPH4U1-12 Physics Project</Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
            Linear Actuator
            <span className="block text-accent mt-2">Manual Adjustable Chair</span>
          </h1>

          <div className="flex flex-wrap gap-4 text-lg mb-8">
            <span>Eden Ambrose</span>
            <span className="text-accent">•</span>
            <span>Umut Temizyurek</span>
            <span className="text-accent">•</span>
            <span>Fateh Khalfaguliyev</span>
          </div>

          <p className="text-xl text-primary-foreground/80 max-w-3xl mb-8">Due: October 1, 2025</p>

          <div className="flex items-center gap-2 text-accent animate-bounce">
            <ArrowDown className="w-6 h-6" />
            <span className="text-sm uppercase tracking-wider">Scroll to explore</span>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-foreground">
                The Role of Pneumatic Cylinders in Adjustable Office Chairs
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Office chairs are adjustable by using a gas cylinder, referred to as a{" "}
                <strong className="text-foreground">pneumatic linear actuator</strong>. With the pull of a lever, the
                seat can be raised or lowered, making it easy for every user to find their ideal working height.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Besides improving comfort, this device is also important for ergonomics and workplace health.
              </p>
            </div>

            <div className="relative">
              <img src="/231.webp" alt="Office chair cutaway diagram" className="w-full h-auto rounded-lg shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-6 bg-muted">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-secondary text-secondary-foreground">Technical Explanation</Badge>
            <h2 className="text-4xl font-bold mb-6 text-foreground">How Does a Pneumatic Actuator Work?</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="order-2 md:order-1 hover:shadow-xl shadow-md transition-shadow">
              <img
                src="/gas-cylinder-diagram.jpg"
                alt="Pneumatic cylinder diagram"
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>

            <div className="order-1 md:order-2 space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                The pneumatic actuator generates force using{" "}
                <strong className="text-foreground">compressed nitrogen gas</strong> inside a sealed chamber. Pressure
                changes cause a piston to move inside the cylinder.
              </p>

              <div className="bg-card p-6 rounded-lg border-l-4 border-accent transition-shadow hover:shadow-xl">
                <h3 className="font-bold text-xl mb-3 text-foreground">The Process:</h3>
                <ol className="space-y-3 text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="font-bold text-accent">1.</span>
                    <span>User pulls the lever under the chair</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-accent">2.</span>
                    <span>Opening valve is activated</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-accent">3.</span>
                    <span>Piston moves as gas expands or compresses</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-accent">4.</span>
                    <span>Lever is released, valve closes, seat locks in place</span>
                  </li>
                </ol>
              </div>

              <div className="bg-primary text-primary-foreground p-6 rounded-xl hover:shadow-xl transition-shadow">
                <h3 className="font-bold text-xl mb-3">Physics Formula:</h3>
                <p className="text-3xl font-mono text-center py-4">F = P × A</p>
                <p className="text-sm text-center text-primary-foreground/80">Force = Pressure × Area</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Task Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-foreground">What Task Does It Perform?</h2>
          <p className="text-xl text-muted-foreground leading-relaxed mb-12">
            Seat height is adjusted by the pneumatic cylinder. The system ensures that people with different body sizes
            or heights at their desks can align themselves properly.
          </p>

          <div className="relative">
            <img
              src="/seatadjustment.webp"
              alt="Before and after chair adjustment"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 px-6 bg-muted">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-success text-success-foreground">Benefits</Badge>
            <h2 className="text-4xl font-bold mb-6 text-foreground">Advantages Over Other Methods</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Compared to manual adjustment methods like cranks or screw lifts, pneumatic actuators offer superior
              performance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="border-t-4 border-t-success hover:shadow-xl transition-shadow">
              <CardContent className="pt-8 pb-6 text-center">
                <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-success" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-foreground">Smooth & Easy</h3>
                <p className="text-muted-foreground">Just one hand on the lever</p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-success hover:shadow-xl transition-shadow">
              <CardContent className="pt-8 pb-6 text-center">
                <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-success" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-foreground">Quick</h3>
                <p className="text-muted-foreground">Instant adjustments for different users</p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-success hover:shadow-xl transition-shadow">
              <CardContent className="pt-8 pb-6 text-center">
                <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-success" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-foreground">Silent & Efficient</h3>
                <p className="text-muted-foreground">No motors or electricity required</p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-success hover:shadow-xl transition-shadow">
              <CardContent className="pt-8 pb-6 text-center">
                <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-success" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-foreground">Encourages Good Posture</h3>
                <p className="text-muted-foreground">Simple to change, leading to people actually usings it</p>
              </CardContent>
            </Card>
          </div>


          <div className="flex justify-center rounded-lg">
            <img
              src="/chairswithdifferentactuators.png"
              alt="Comparison of adjustment methods"
              className="rounded-xl transition-shadow hover:shadow-xl w-full max-w-3xl border-4"
            />
          </div>
        </div>
      </section>

      {/* Ergonomics Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img
                src="/sittingposture.png"
                alt="Ergonomic seating chart"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>

            <div className="order-1 md:order-2">
              <Badge className="mb-4 bg-secondary text-secondary-foreground">Health Benefits</Badge>
              <h2 className="text-4xl font-bold mb-6 text-foreground">Ergonomics and Health Benefits</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Being able to adjust chair height easily means workers can keep their{" "}
                <strong className="text-foreground">feet flat</strong>,{" "}
                <strong className="text-foreground">knees at 90°</strong>, and{" "}
                <strong className="text-foreground">arms aligned with their desk</strong>.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                This reduces strain on the lower back, shoulders, and neck.
              </p>
              <div className="bg-accent/10 border-l-4 border-accent p-6 rounded-r-lg">
                <p className="text-lg font-semibold text-foreground">
                  Over time, ergonomic seating lowers the risk of musculoskeletal disorders (MSDs), which are a major
                  reason for lost workdays.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Disadvantages Section */}
      <section className="py-20 px-6 bg-muted">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-destructive text-destructive-foreground">Limitations</Badge>
            <h2 className="text-4xl font-bold mb-6 text-foreground">Disadvantages</h2>
            <p className="text-xl text-muted-foreground">
              Despite their benefits, pneumatic cylinders do have downsides
            </p>
          </div>

          <div className="space-y-4">
            <Card className="border-l-4 border-l-destructive hover:shadow-lg transition-shadow">
              <CardContent className="p-6 flex gap-4">
                <XCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2 text-foreground">Seal Wear Over Time</h3>
                  <p className="text-muted-foreground">
                    Seals can wear out, causing the chair to slowly sink during use
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-destructive hover:shadow-lg transition-shadow">
              <CardContent className="p-6 flex gap-4">
                <XCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2 text-foreground">Replacement Required</h3>
                  <p className="text-muted-foreground">
                    Once faulty, they usually must be replaced rather than repaired
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-destructive hover:shadow-lg transition-shadow">
              <CardContent className="p-6 flex gap-4">
                <XCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2 text-foreground">Limited Force Generation</h3>
                  <p className="text-muted-foreground">
                    Cannot generate as much force as hydraulic systems (but that isn't needed for chairs)
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-accent text-accent-foreground">Comparison</Badge>
            <h2 className="text-4xl font-bold mb-6 text-foreground">How Does It Compare to Other Methods?</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-card rounded-lg overflow-hidden shadow-xl">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="p-4 text-left font-bold">Method</th>
                  <th className="p-4 text-left font-bold">Characteristics</th>
                  <th className="p-4 text-left font-bold">Best For</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border bg-accent/5">
                  <td className="p-4 font-bold text-foreground">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-success" />
                      Pneumatic Cylinders
                    </div>
                  </td>
                  <td className="p-4 text-muted-foreground">Clean, compact, smooth, inexpensive</td>
                  <td className="p-4 text-muted-foreground">Office seating (chosen method)</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4 font-bold text-foreground">Hydraulic Cylinders</td>
                  <td className="p-4 text-muted-foreground">Use oil, can lift heavier loads, bulkier and messier</td>
                  <td className="p-4 text-muted-foreground">Heavy machinery, industrial equipment</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4 font-bold text-foreground">Mechanical Screw/Crank</td>
                  <td className="p-4 text-muted-foreground">Strong and durable, but slower and requires effort</td>
                  <td className="p-4 text-muted-foreground">Piano benches, workbenches</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-foreground">No Actuator (Fixed)</td>
                  <td className="p-4 text-muted-foreground">Cheap, simple construction</td>
                  <td className="p-4 text-muted-foreground">Budget furniture, no ergonomic flexibility</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 px-6 bg-primary text-primary-foreground">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Impact on Society and the Environment</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-card/10 backdrop-blur border-primary-foreground/20">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-primary-foreground">Society</h3>
                <p className="text-primary-foreground/80 leading-relaxed mb-4">
                  Adjustable seating increases{" "}
                  <strong className="text-primary-foreground">comfort, productivity, and inclusivity</strong> in
                  workplaces and schools.
                </p>
                <p className="text-primary-foreground/80 leading-relaxed">
                  By reducing the risk of injury, pneumatic chairs also cut down on sick days and improve public health.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/10 backdrop-blur border-primary-foreground/20">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-6">
                  <Leaf className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-primary-foreground">Environment</h3>
                <p className="text-primary-foreground/80 leading-relaxed mb-4">
                  <strong className="text-primary-foreground">Nitrogen gas is safe and inert.</strong> The steel
                  cylinders, if discarded, can add to waste, but they are recyclable.
                </p>
                <p className="text-primary-foreground/80 leading-relaxed">
                  Durable cylinders also last for years, which reduces the frequency of replacement and overall
                  environmental impact.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Conclusion Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-6 bg-accent text-accent-foreground">Final Thoughts</Badge>
          <h2 className="text-4xl font-bold mb-8 text-foreground">Conclusion</h2>
          <p className="text-xl text-muted-foreground leading-relaxed mb-6">
            There may seem to be little significance to a pneumatic linear actuator, but this part of an office chair
            makes a <strong className="text-foreground">big difference</strong>.
          </p>
          <p className="text-xl text-muted-foreground leading-relaxed mb-6">
            Making adjustments simple, supporting ergonomics, reducing injury risks, and improving workplace
            productivity as it allows such adjustments to be straightforward.
          </p>
          <div className="bg-accent/10 border-2 border-accent p-8 rounded-lg inline-block">
            <p className="text-2xl font-bold text-foreground">
              The method is cleaner, simpler, and more appropriate for everyday office use than hydraulics or mechanics.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-12 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground mb-2">Grade 12 Physics Project • SPH4U1-12</p>
          <p className="text-sm text-muted-foreground">Eden Ambrose • Umut Temizyurek • Fateh Khalfaguliyev</p>
          <p className="text-sm text-muted-foreground mt-4">Due: October 1, 2025</p>
        </div>
      </footer>
    </div>
  )
}
